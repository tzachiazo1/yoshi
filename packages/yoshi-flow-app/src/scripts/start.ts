import path from 'path';
import arg from 'arg';
import fs from 'fs-extra';
import chalk from 'chalk';
import DevEnvironment from 'yoshi-common/build/dev-environment';
import { TARGET_DIR, BUILD_DIR } from 'yoshi-config/build/paths';
import { isWebWorkerBundle } from 'yoshi-helpers/build/queries';
import { getServerStartFile } from 'yoshi-helpers/build/server-start-file';
import { cliCommand } from '../bin/yoshi-app';
import {
  createClientWebpackConfig,
  createServerWebpackConfig,
  createWebWorkerWebpackConfig,
} from '../webpack.config';

const join = (...dirs: Array<string>) => path.join(process.cwd(), ...dirs);

const start: cliCommand = async function (argv, config) {
  const args = arg(
    {
      // Types
      '--help': Boolean,
      '--server': String,
      '--url': String,
      '--production': Boolean,
      '--debug': Boolean,
      '--debug-brk': Boolean,

      // Aliases
      '--entry-point': '--server',
      '-e': '--server',
    },
    { argv },
  );

  const {
    '--help': help,
    '--server': serverStartFileCLI,
    '--url': url,
    '--production': shouldRunAsProduction,
  } = args;

  if (help) {
    console.log(
      `
      Description
        Starts the application in development mode

      Usage
        $ yoshi-app start

      Options
        --help, -h      Displays this message
        --server        (Deprecated!) The main file to start your server
        --url           Opens the browser with the supplied URL
        --production    Start using unminified production build
        --debug         Allow app-server debugging
        --debug-brk     Allow app-server debugging, process won't start until debugger will be attached
    `,
    );

    process.exit(0);
  }

  const inspectArg = process.argv.find((arg) => arg.includes('--debug'));

  let serverStartFile;

  try {
    serverStartFile = getServerStartFile({ serverStartFileCLI });
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }

  console.log(chalk.cyan('Starting development environment...\n'));

  if (shouldRunAsProduction) {
    process.env.BABEL_ENV = 'production';
    process.env.NODE_ENV = 'production';
  }

  await Promise.all([
    fs.emptyDir(join(BUILD_DIR)),
    fs.emptyDir(join(TARGET_DIR)),
  ]);

  const clientConfig = createClientWebpackConfig(config, {
    isDev: true,
    suricate: config.suricate,
    isHot: config.hmr as boolean,
  });

  const serverConfig = createServerWebpackConfig(config, {
    isDev: true,
    isHot: true,
  });

  let webWorkerConfig;

  if (isWebWorkerBundle) {
    webWorkerConfig = createWebWorkerWebpackConfig(config, {
      isDev: true,
      isHot: true,
    });
  }

  const devEnvironment = await DevEnvironment.create({
    webpackConfigs: [clientConfig, serverConfig, webWorkerConfig],
    webpackDevServerPort: config.servers.cdn.port,
    appServerPort: config.servers.app.port,
    https: config.servers.cdn.ssl,
    serverFilePath: serverStartFile,
    suricate: config.suricate,
    appName: config.name,
    startUrl: url || config.startUrl,
    enableClientHotUpdates: Boolean(config.hmr),
    createEjsTemplates: config.experimentalBuildHtml,
    storybook: config.experimentalStorybook,
    yoshiServer: config.yoshiServer,
    inspectArg,
  });

  await devEnvironment.start();
};

export default start;
