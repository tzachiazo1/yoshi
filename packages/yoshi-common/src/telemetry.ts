import semver from 'semver';
import biLoggerClient, { BiLoggerFactory } from 'wix-bi-logger-client';
import initSchemaLogger, { getLoggerConf } from 'bi-logger-yoshi';
import { isTypescriptProject } from 'yoshi-helpers/build/queries';
import isCI from 'is-ci';
import { requestHttps } from './utils/helpers';

// Create BI factory
const biLoggerFactory = biLoggerClient.factory() as BiLoggerFactory<
  ReturnType<typeof getLoggerConf>
>;

// Register a custom publisher that uses Node's HTTPS API
biLoggerFactory.addPublisher(async (eventParams: any, context: any) => {
  // Don't collect events from yoshi's own tests
  if (process.env.NPM_PACKAGE === 'yoshi-monorepo') {
    return;
  }

  try {
    await requestHttps(`frog.wix.com/${context.endpoint}`, eventParams);
  } catch (error) {
    // Swallow errors
  }
});

// Create logger
const biLogger = initSchemaLogger(biLoggerFactory)();

const { version: yoshiVersion } = require('../package.json');

biLogger.util.updateDefaults({
  isCI,
  nodeVersion: `${semver.parse(process.version)?.major}`,
  yoshiVersion: `${semver.parse(yoshiVersion)?.major}`,
  projectLanguage: isTypescriptProject() ? 'ts' : 'js',
});

// Function to fire an event
export function buildStart(yoshiFlow: yoshiFlow, pkgJsonName: string) {
  return biLogger.buildStart({
    projectName: pkgJsonName,
    yoshiFlow,
  });
}

type yoshiFlow = 'Editor' | 'App' | 'Legacy' | 'BM' | 'Library';
