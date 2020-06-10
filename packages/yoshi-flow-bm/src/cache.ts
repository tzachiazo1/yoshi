import os from 'os';
import path from 'path';
import fs from 'fs-extra';
import { getProjectArtifactId } from 'yoshi-helpers/build/utils';

const getCacheDir = (cacheNamespace = 'yoshi-flow-bm') => {
  const projectName = getProjectArtifactId()!;

  switch (os.platform()) {
    case 'win32':
      return path.join(
        os.homedir(),
        'AppData',
        'Local',
        cacheNamespace,
        projectName,
        'Cache',
      );
    case 'darwin':
      return path.join(
        os.homedir(),
        'Library',
        'Caches',
        cacheNamespace,
        projectName,
      );
    case 'linux':
    default:
      return path.join(os.homedir(), '.cache', cacheNamespace, projectName);
  }
};

const getCacheFile = () => path.join(getCacheDir(), 'cache.json');

export const readCache = (key: string) => {
  const cachePath = getCacheFile();

  if (!fs.existsSync(cachePath)) {
    return undefined;
  }

  const cache = fs.readJSONSync(cachePath);

  return cache[key];
};

export const writeCache = (key: string, value: any) => {
  const cachePath = getCacheFile();
  const cache = fs.existsSync(cachePath) ? fs.readJSONSync(cachePath) : {};

  cache[key] = value;

  fs.ensureFileSync(cachePath);
  fs.writeJSONSync(cachePath, cache);
};

export const clearCache = () => {
  fs.rmdirSync(getCacheDir(), { recursive: true });
};
