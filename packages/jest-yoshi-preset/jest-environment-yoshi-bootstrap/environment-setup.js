const { loadJestConfig } = require('../load-config');

const jestYoshiConfig = loadJestConfig();

const bootstrapConfig = jestYoshiConfig.bootstrap;

global.__setup__ = bootstrapConfig && bootstrapConfig.setup;
global.__teardown__ = bootstrapConfig && bootstrapConfig.teardown;
