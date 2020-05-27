---
id: application
title: Application Level
sidebar_label: Application Level
---


Under `src` directory located: `viewer.app.ts`, `editor.app.ts`, `assets` and `components`.
## `viewer.app.ts`
Entry point for Viewer Script file.

### `initAppForPage`
A general call to the service where it should initiate its reusable data across components.
It's called with the basic configuration of the application before the Viewer knows which components exist on the page.

Any data returned in `initAppForPage` will be passed to each controller as an `appData` value.


⚠️ You shouldn't use `createControllers`. We will generate it under the hood.

*src/viewer.app.ts*
```ts
export const initAppForPage = async (
  initParams,
  platformApis,
  wixCodeApi,
  platformServicesApis,
  flowAPI
) => {
  // Init some fake storage common for all widgets
  const kitchen = initKitchen();
  const omelette = kitchen.cook('omlette');
  
  // will be passed as an `appData.omelette` for each controller
  return {
    omelette,
  };
};
```

Returned data will be passed to all controllers.
*src/components/SomeWidget/controller.ts*
```ts
export default ({ appData }) => {
  // Do something with data received from `initAppForPage`...
  const { omelette } = appData;

  return {
    pageReady() {
      setProps({
        // Pass it to the Widget if needed
        omelette,
      });
    }
  };
};
```

For more info related to `initAppForPage` check the [Viewer platform official docs](https://bo.wix.com/wix-docs/client/client-viewer-platform/articles/lifecycle#client-viewer-platform_articles_lifecycle_initappforpage)

## `editor.app.ts`
Entry point for Editor Script file.  
We are preserving the [Editor Script API](https://bo.wix.com/wix-docs/client/editor-platform/editor-application-reference/editor-platform-app), but adding `flowAPI` with useful helpers as a last argument.  
It provides already initialized `sentryMonitor` and `fedopsLogger` objects, `reportError` helper function and `getExperiments` accessor. For more info about flowAPI, please read [Component Level page](./component#flowapi)

*src/editor.app.ts*
```ts
export const editorReady = async (
  editorSDK,
  appDefinitionId,
  platformOptions,
  flowAPI
) => {
  const platform = new AppPlatform(editorSDK, appDefinitionId);

  if (platformOptions.firstInstall) {
    await platform.install();
  } else {
    await platform.hackForTemplates();
  }
};

export const getAppManifest = async () => {
  return getManifest();
};
```

