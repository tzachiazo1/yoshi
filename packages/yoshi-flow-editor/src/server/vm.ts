import { Engine } from 'velocity';
import { SentryConfig } from 'yoshi-flow-editor-runtime/build/constants';
import { generateSentryScript } from '../utils';
import velocityData from './velocity.data.json';
import velocityDataPrivate from './velocity.private.data.json';

export default (
  url: string,
  data: {
    widgetName?: string;
    debug?: boolean;
    usePrivateSDKMock?: boolean;
    sentry?: SentryConfig | null;
    clientTopology?: Partial<
      Record<'staticsDomain' | 'staticsBaseUrl', string>
    >;
  } = {},
) => {
  const additionalScripts: { sentryScript: string | null } = {
    sentryScript: null,
  };
  if (data.sentry) {
    additionalScripts.sentryScript = generateSentryScript(data.sentry);
  }
  return new Engine({ template: url }).render({
    ...velocityData,
    ...velocityDataPrivate,
    ...data,
    ...additionalScripts,
    clientTopology: {
      ...(velocityData.clientTopology ? velocityData.clientTopology : {}),
      ...(data.clientTopology ? data.clientTopology : {}),
    },
  });
};
