import { EditorReadyFn } from 'yoshi-flow-editor-runtime';

export const editorReady: EditorReadyFn = async (
  editorSDK,
  appDefinitionId,
  platformOptions,
  flowAPI,
) => {
  const { reportError, fedopsLogger } = flowAPI;

  fedopsLogger.appLoadStarted();
  try {
    if (platformOptions.firstInstall) {
      fedopsLogger.interactionStarted('install');
      // Place for your app initialization here. (Add pages to editor platform, init configs, etc);
      console.log('App was installed ✅');
      fedopsLogger.interactionEnded('install');
    }
  } catch (e) {
    reportError(e);
  }

  fedopsLogger.appLoaded();
};
