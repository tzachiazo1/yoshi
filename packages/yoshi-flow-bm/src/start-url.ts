import prompts from 'prompts';
import { getProjectArtifactId } from 'yoshi-helpers/build/utils';
import { Config } from 'yoshi-config/build/config';
import { readCache, writeCache } from './cache';
import { FlowBMModel } from './model';

const MSID_CACHE_KEY = 'metaSiteId';

const readMetaSiteId = async () => {
  const { metaSiteId } = await prompts({
    type: 'text',
    name: 'metaSiteId',
    message:
      'What is your preferred metaSiteId?\n' +
      '(will determine the production site to be opened in Business-Manager)',
  });

  return metaSiteId as string;
};

const getMetaSiteId = async (): Promise<string> => {
  const cached = readCache(MSID_CACHE_KEY);

  if (cached) {
    return cached;
  }

  const metaSiteId = await readMetaSiteId();

  setMetaSiteid(metaSiteId);

  return metaSiteId;
};

const setMetaSiteid = (metaSiteId: string) =>
  writeCache(MSID_CACHE_KEY, metaSiteId);

const getStartUrl = async (
  { pages }: FlowBMModel,
  cdn: Config['servers']['cdn'],
) => {
  const metaSiteId = await getMetaSiteId();

  const bmUrl = `https://www.wix.com/dashboard/${metaSiteId}/${pages[0].route}`;

  const artifactId = getProjectArtifactId()!;

  const protocol = cdn.ssl ? 'https' : 'http';
  const cdnUrl = `${protocol}://localhost:${cdn.port}`;

  return elgarOverride(bmUrl, { [artifactId]: cdnUrl });
};

const elgarOverride = (
  redirectToUrl: string,
  staticsVersions: Record<string, string>,
) =>
  'https://apps.wix.com/elgar-server/redirect' +
  `?redirectToUrl=${redirectToUrl}` +
  `&staticsVersions=${JSON.stringify(staticsVersions)}`;

export default getStartUrl;
