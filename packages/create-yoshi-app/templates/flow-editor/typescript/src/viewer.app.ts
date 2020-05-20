import { InitAppForPageFn } from 'yoshi-flow-editor-runtime';

export const initAppForPage: InitAppForPageFn = async (
  initParams,
  platformApis,
  wixCodeApi,
  platformServices,
  flowAPI,
) => {
  const { reportError } = flowAPI;
  try {
    console.log('App inited');
  } catch (e) {
    reportError(e);
  }
};
