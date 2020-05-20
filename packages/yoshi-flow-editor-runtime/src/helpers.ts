import { IWixAPI } from '@wix/native-components-infra/dist/src/types/types';

export const getSiteLanguage = (
  wixCodeApi: IWixAPI,
  fallbackLanguage = 'en',
) => {
  if (wixCodeApi.window.multilingual.isEnabled) {
    return wixCodeApi.window.multilingual.currentLanguage;
  }

  // NOTE: language can be null (see WEED-18001)
  return wixCodeApi.site.language || fallbackLanguage;
};

export const isMobile = (wixCodeApi: IWixAPI) =>
  wixCodeApi.window.formFactor === 'Mobile';

export const isSSR = (wixCodeApi: IWixAPI) =>
  wixCodeApi.window.rendering.env === 'backend';
