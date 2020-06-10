import path from 'path';
import stream from 'stream';
import child_process from 'child_process';
import chalk from 'chalk';
import waitPort from 'wait-port';
import execa from 'execa';
import fs from 'fs-extra';
import { getDevelopmentEnvVars } from 'yoshi-helpers/build/bootstrap-utils';
import { stripOrganization } from 'yoshi-helpers/build/utils';
import { SERVER_LOG_FILE } from 'yoshi-config/build/paths';
import SocketServer from './socket-server';
import { createSocket as createTunnelSocket } from './utils/suricate';

function serverLogPrefixer(appName?: string) {
  const prefix = appName ? `[${stripOrganization(appName)}]` : `[SERVER]`;
  return new stream.Transform({
    transform(chunk, encoding, callback) {
      this.push(`${chalk.greenBright(prefix)}: ${chunk.toString()}`);
      callback();
    },
  });
}

function notUndefined<T>(x: T | undefined): x is T {
  return x !== undefined;
}

type ServerProcessEnv = {
  NODE_ENV: 'development' | 'production';
  HMR_PORT?: string;
};

export class ServerProcess {
  private cwd: string;
  private serverFilePath: string;
  private env: ServerProcessEnv;
  public port: number;
  public child?: child_process.ChildProcess;
  private useAppName?: boolean;
  public appName: string;
  private inspectArg?: string;

  constructor({
    cwd = process.cwd(),
    serverFilePath,
    env,
    port,
    useAppName,
    appName,
    inspectArg,
  }: {
    cwd?: string;
    serverFilePath: string;
    env: ServerProcessEnv;
    port: number;
    useAppName?: boolean;
    appName: string;
    inspectArg?: string;
  }) {
    this.cwd = cwd;
    this.serverFilePath = serverFilePath;
    this.env = env;
    this.port = port;
    this.useAppName = useAppName;
    this.appName = appName;
    this.inspectArg = inspectArg;
  }

  async initialize() {
    const serverLogFile = path.join(this.cwd, SERVER_LOG_FILE);
    // Verify that the `target/server.log` file exist before we write to it
    fs.ensureFileSync(serverLogFile);

    const bootstrapEnvironmentParams = getDevelopmentEnvVars({
      port: this.port,
      cwd: this.cwd,
    });

    const userServerFilePath = path.isAbsolute(this.serverFilePath)
      ? this.serverFilePath
      : path.join(process.cwd(), this.serverFilePath);
    const serverProcessWorker = require.resolve(
      './server-process-worker-with-transpilation.js',
    );

    this.child = execa.node(serverProcessWorker, [], {
      stdio: 'pipe',
      // execArgv
      nodeOptions: [this.inspectArg]
        .filter(notUndefined)
        .map((arg) => arg.replace('debug', 'inspect')),
      env: {
        ...process.env,
        PORT: `${this.port}`,
        ...bootstrapEnvironmentParams,
        ...this.env,
        __SERVER_FILE_PATH__: userServerFilePath,
      },
    });

    const serverLogWriteStream = fs.createWriteStream(
      path.join(this.cwd, SERVER_LOG_FILE),
    );

    const serverOutLogStream = this.child.stdout!.pipe(
      serverLogPrefixer(this.useAppName ? this.appName : undefined),
    );

    serverOutLogStream.pipe(serverLogWriteStream);
    serverOutLogStream.pipe(process.stdout);

    const serverErrorLogStream = this.child.stderr!.pipe(
      serverLogPrefixer(this.useAppName ? this.appName : undefined),
    );

    serverErrorLogStream.pipe(serverLogWriteStream);
    serverErrorLogStream.pipe(process.stderr);

    await waitPort({
      port: this.port,
      output: 'silent',
      timeout: 20000,
    });
  }

  async close() {
    // @ts-ignore
    if (this.child && this.child.exitCode === null) {
      this.child.kill();

      await new Promise((resolve) => {
        const check = () => {
          if (this.child && this.child.killed) {
            return resolve();
          }

          setTimeout(check, 100);
        };

        setTimeout(check, 100);
      });
    }
  }

  async restart() {
    await this.close();

    await this.initialize();
  }
}

export class ServerProcessWithHMR extends ServerProcess {
  public socketServer: SocketServer;
  private resolve?: (value?: unknown) => void;
  public suricate: boolean;

  constructor({
    cwd,
    serverFilePath,
    socketServer,
    suricate,
    appName,
    port,
    inspectArg,
  }: {
    cwd: string;
    serverFilePath: string;
    socketServer: SocketServer;
    suricate: boolean;
    appName: string;
    port: number;
    inspectArg?: string;
  }) {
    super({
      cwd,
      port,
      serverFilePath,
      appName,
      env: {
        HMR_PORT: `${socketServer.hmrPort}`,
        NODE_ENV: 'development',
      },
      inspectArg,
    });

    this.socketServer = socketServer;
    this.suricate = suricate;
  }

  async initialize() {
    if (this.suricate) {
      createTunnelSocket(this.appName, this.port);
    }

    await this.socketServer.initialize();

    this.socketServer.on('message', this.onMessage.bind(this));

    await super.initialize();
  }

  onMessage(response: any) {
    this.resolve && this.resolve(response);
  }

  send(message: any) {
    this.socketServer.send(message);

    return new Promise((resolve) => {
      this.resolve = resolve;
    });
  }

  static async create({
    cwd = process.cwd(),
    serverFilePath,
    appName,
    suricate,
    port,
    inspectArg,
  }: {
    cwd?: string;
    serverFilePath: string;
    appName: string;
    suricate: boolean;
    port: number;
    inspectArg?: string;
  }) {
    const socketServer = await SocketServer.create();

    return new ServerProcessWithHMR({
      socketServer,
      cwd,
      serverFilePath,
      appName,
      suricate,
      port,
      inspectArg,
    });
  }
}
