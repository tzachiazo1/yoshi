import path from 'path';
import fs from 'fs';
import globby from 'globby';
import config from 'yoshi-config';
import * as globs from 'yoshi-config/build/globs';
import { POM_FILE } from 'yoshi-config/build/paths';
import isCi from 'is-ci';
import { defaultEntry } from './constants';

export const exists = (
  patterns: string | ReadonlyArray<string>,
  options?: globby.GlobbyOptions,
) => {
  return globby.sync(patterns, options).length > 0;
};

export const existsSync = (file: string) => {
  return fs.existsSync(file);
};

export const isSingleEntry = (entry: any) =>
  typeof entry === 'string' || Array.isArray(entry);

export const watchMode = () => {
  return !!process.env.WIX_NODE_BUILD_WATCH_MODE;
};

export const inTeamCity = () => {
  return !!(process.env.BUILD_NUMBER || process.env.TEAMCITY_VERSION);
};

export const inPRTeamCity = () => {
  return inTeamCity() && process.env.agentType === 'pullrequest';
};

export const isProduction = () =>
  (process.env.NODE_ENV || '').toLowerCase() === 'production';

export const shouldRunWebpack = (webpackConfig: any): boolean => {
  const defaultEntryPath = path.join(webpackConfig.context, defaultEntry);
  return (config.entry ||
    exists(`${defaultEntryPath}.{js,jsx,ts,tsx}`)) as boolean;
};

export const shouldRunSass = () => {
  return (
    globby.sync(globs.scss).filter((file) => path.basename(file)[0] !== '_')
      .length > 0
  );
};

export const isTypescriptProject = () =>
  fs.existsSync(path.resolve('tsconfig.json'));

export const isUsingTSLint = () => exists('tslint.*');

export const shouldExportModule = () => {
  return !!config.pkgJson.module;
};

export const shouldRunLess = () => {
  return exists(globs.less);
};

export const hasE2ETests = (cwd = process.cwd()) => {
  return exists(globs.e2eTests, { gitignore: true, cwd });
};

export const hasProtractorConfigFile = () => {
  return exists(path.resolve('protractor.conf.js'));
};

export const hasBundleInStaticsDir = (cwd = process.cwd()) => {
  return (
    globby.sync(path.resolve(globs.statics, '*.bundle.js'), { cwd }).length > 0
  );
};

export const shouldDeployToCDN = () => {
  return (
    isCi &&
    (process.env.ARTIFACT_VERSION || process.env.SRC_MD5) &&
    fs.existsSync(POM_FILE)
  );
};

export const isWebWorkerBundle = !!config.webWorkerEntry;
