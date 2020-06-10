process.on('exit', () => {
  if (global.SERVER) {
    global.SERVER.kill();
  }
});

const fs = require('fs-extra');
const stream = require('stream');
const chalk = require('chalk');
const puppeteer = require('puppeteer');
const child_process = require('child_process');
const waitPort = require('wait-port');
const { servers } = require('yoshi-config');
const { WS_ENDPOINT_PATH, IS_DEBUG_MODE } = require('./constants');
const { shouldRunE2Es } = require('./utils');
const { shouldDeployToCDN } = require('yoshi-helpers/build/queries');
const { getProcessOnPort } = require('yoshi-helpers/utils');
const { setupRequireHooks } = require('yoshi-common/build/require-hooks');
const cdnProxy = require('./cdnProxy');
const loadJestYoshiConfig = require('../load-jest-config');
const JestWatchDebug = require('../plugins/jest-watch-debug');
// the user's config is loaded outside of a jest runtime and should be transpiled
// with babel/typescript, this may be run separately for every worker
setupRequireHooks();

const serverLogPrefixer = () => {
  return new stream.Transform({
    transform(chunk, encoding, callback) {
      this.push(`${chalk.magentaBright('[SERVER]')}: ${chunk.toString()}`);
      callback();
    },
  });
};

module.exports = async (config) => {
  const jestYoshiConfig = loadJestYoshiConfig();
  // a bit hacky, run puppeteer setup only if it's required
  if (await shouldRunE2Es()) {
    // start with a few new lines
    console.log('\n\n');

    const forwardProxyPort = process.env.FORWARD_PROXY_PORT || 3333;

    if (shouldDeployToCDN()) {
      await cdnProxy.start(forwardProxyPort);
    }

    const puppeteerRuntimeOverrides = {};

    if (config.watch || config.watchAll) {
      const watchDebugMode = JestWatchDebug.getDebugMode();

      puppeteerRuntimeOverrides.devtools = watchDebugMode;
      await fs.outputFile(IS_DEBUG_MODE, watchDebugMode);
    }

    global.BROWSER = await puppeteer.launch({
      // user defined options
      ...jestYoshiConfig.puppeteer,
      ...puppeteerRuntimeOverrides,

      // defaults
      args: [
        '--no-sandbox',
        ...(servers.cdn.ssl ? ['--ignore-certificate-errors'] : []),
        ...(shouldDeployToCDN()
          ? [
              '--no-sandbox',
              '--disable-setuid-sandbox',
              '--ignore-certificate-errors',
              `--proxy-server=127.0.0.1:${forwardProxyPort}`,
              '--disable-extensions',
              '--disable-plugins',
            ]
          : []),
        ...(jestYoshiConfig.puppeteer
          ? jestYoshiConfig.puppeteer.args || []
          : []),
      ],
    });

    await fs.outputFile(WS_ENDPOINT_PATH, global.BROWSER.wsEndpoint());

    const webpackDevServerProcess = await getProcessOnPort(
      servers.cdn.port,
      false,
    );

    if (
      webpackDevServerProcess &&
      webpackDevServerProcess.cwd !== process.cwd()
    ) {
      throw new Error(
        `A different process (${chalk.cyan(
          webpackDevServerProcess.cwd,
        )}) is already running on port '${chalk.cyan(
          servers.cdn.port,
        )}', aborting.`,
      );
    }

    if (jestYoshiConfig.server) {
      const serverProcess = await getProcessOnPort(
        jestYoshiConfig.server.port,
        false,
      );

      if (serverProcess) {
        throw new Error(
          `A different process (${chalk.cyan(
            serverProcess.cwd,
          )}) is already running on port ${chalk.cyan(
            jestYoshiConfig.server.port,
          )}, aborting.`,
        );
      }

      global.SERVER = child_process.spawn(jestYoshiConfig.server.command, {
        shell: true,
        stdio: 'pipe',
        env: {
          ...process.env,
          PORT: jestYoshiConfig.server.port,
        },
      });

      global.SERVER.stdout.pipe(serverLogPrefixer()).pipe(process.stdout);
      global.SERVER.stderr.pipe(serverLogPrefixer()).pipe(process.stderr);

      if (jestYoshiConfig.server.port) {
        const timeout = 5000;

        const portFound = await waitPort({
          port: jestYoshiConfig.server.port,
          output: 'silent',
          timeout,
        });

        if (!portFound) {
          throw new Error(
            `Tried running '${chalk.cyan(
              jestYoshiConfig.server.filename,
            )}' but couldn't find a server on port '${chalk.cyan(
              jestYoshiConfig.server.port,
            )}' after ${chalk.cyan(timeout)} milliseconds.`,
          );
        }
      }

      console.log('\n');
    }
  }
};
