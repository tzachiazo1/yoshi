import Experiments from '@wix/wix-experiments';
import { ExperimentsConfig } from './constants';

export function initExperimentsGetter(
  config: ExperimentsConfig,
  baseUrl = 'https://www.wix.com',
): () => Promise<Experiments> {
  const experiments = new Experiments({
    baseUrl,
  });
  const loaderPromise = experiments.load(config.scope);
  return async () => {
    await loaderPromise;
    return experiments;
  };
}

export function initEmptyExperimentsGetter(
  baseUrl = 'https://www.wix.com',
): () => Promise<Experiments> {
  const experiments = new Experiments({
    baseUrl,
    experiments: {},
  });
  return async () => {
    return experiments;
  };
}
