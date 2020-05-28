import {
  CreateControllerFn,
  ControllerParams,
} from 'yoshi-flow-editor-runtime';
import { appName } from '../../../.application.json';
import { getSiteTranslations } from '../../config/i18n';

const createController: CreateControllerFn = async ({
  controllerConfig,
  flowAPI,
}: ControllerParams) => {
  const { appParams, setProps } = controllerConfig;
  const {
    fedopsLogger,
    getExperiments,
    getSiteLanguage,
    widgetId,
    isSSR,
    isMobile,
  } = flowAPI;

  const language = getSiteLanguage();
  const [experiments, translations] = await Promise.all([
    getExperiments(),
    getSiteTranslations(language),
  ]);
  const { appDefinitionId } = appParams;

  // Read more about fedops and how to configure it: https://bo.wix.com/wix-docs/client/client-viewer-platform/articles/fedops#client-viewer-platform_articles_fedops_fedops
  fedopsLogger.appLoadStarted();

  return {
    async pageReady() {
      setProps({
        appName,
        language,
        mobile: isMobile(),
        experiments: experiments.all(),
        translations,
      });

      // report loaded SSR of widget
      if (isSSR()) {
        fedopsLogger.appLoaded({ appId: appDefinitionId, widgetId });
      }
    },
  };
};

export default createController;
