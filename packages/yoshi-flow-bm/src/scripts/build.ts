import path from 'path';
import arg from 'arg';
import { runWebpack } from 'yoshi-common/build/webpack-utils';
import { printBundleSizeSuggestion } from 'yoshi-common/build/print-build-results';
import { inTeamCity } from 'yoshi-helpers/build/queries';
import {
  createClientWebpackConfig,
  createServerWebpackConfig,
} from '../webpack.config';
import { CliCommand } from '../bin/yoshi-bm';
import createFlowBMModel from '../model';
import renderModule, { moduleEntryPath } from '../renderModule';
import renderModuleConfig from '../renderModuleConfig';
import printBuildResult from '../print-build-result';

const build: CliCommand = async function(argv, config) {
  const args = arg(
    {
      // Types
      '--help': Boolean,
      '--analyze': Boolean,
      '--stats': Boolean,
      '--source-map': Boolean,

      // Aliases
      '-h': '--help',
    },
    { argv },
  );

  const {
    '--help': help,
    '--analyze': isAnalyze,
    '--stats': forceEmitStats,
    '--source-map': forceEmitSourceMaps,
  } = args;

  if (help) {
    console.log(
      `
      Description
        Compiles the application for production deployment

      Usage
        $ yoshi-bm build

      Options
        --help, -h      Displays this message
        --analyze       Run webpack-bundle-analyzer
        --stats         Emit webpack's stats file on "target/webpack-stats.json"
        --source-map    Emit bundle source maps
    `,
    );

    process.exit(0);
  }

  await Promise.all([
    // fs.emptyDir(join(BUILD_DIR)),
    // fs.emptyDir(join(TARGET_DIR)),
  ]);

  const model = createFlowBMModel();

  printBuildResult(
    model,
    require(path.join(process.cwd(), 'target/webpack-stats.json')),
  );
  return;

  renderModule(model);
  renderModuleConfig(model);

  if (inTeamCity()) {
    const petriSpecs = await import('yoshi-common/build/sync-petri-specs');
    const wixMavenStatics = await import('yoshi-common/build/maven-statics');

    await Promise.all([
      petriSpecs.default({
        config: config.petriSpecsConfig,
      }),
      wixMavenStatics.default({
        clientProjectName: config.clientProjectName,
        staticsDir: config.clientFilesPath,
      }),
    ]);
  }

  const clientDebugConfig = createClientWebpackConfig(config, {
    isDev: true,
    forceEmitSourceMaps,
  });
  clientDebugConfig.entry = { module: moduleEntryPath };

  const clientOptimizedConfig = createClientWebpackConfig(config, {
    isAnalyze,
    forceEmitSourceMaps,
    forceEmitStats,
  });
  clientOptimizedConfig.entry = { module: moduleEntryPath };

  const serverConfig = createServerWebpackConfig(config, {
    isDev: true,
  });

  const { stats } = await runWebpack([
    clientDebugConfig,
    clientOptimizedConfig,
    serverConfig,
  ]);

  const [, clientOptimizedStats] = stats;

  printBuildResult(model, clientOptimizedStats.toJson({ assets: true }));
  printBundleSizeSuggestion();
};

export default build;
