---
id: component
title: Component Level
sidebar_label: Component Level
---

According to the Yoshi Editor Flow concept, the app is grouped by components, instead of functional purpose. Since communitcation between different components (Widget, Page) in scope of single app is a rare case, people usually working on single Component while working on the new business feature.

So for now, we'll have `Widget`, `Settings` and `controller` in a single place, instead of having `settings` directory with all settings panels of your app. Or `viewerScript` directory, which will include all controllers. With last approach, it could be really hard to navigate between `controller` and `Widget` located in completely different directories or even projects, since Widget consumes properties passed by controller. You'll probably want to maintain `PublicData` in a single place also instead of switching between settings and widget directory.

## `.component.json`
Located under `src/components/:componentName/.component.json` this config file helps us to generate `createControllers` for Viewer Script under the hood. Here you can find `id` of your component and type (`WIDGET_OUT_OF_IFRAME`, `PAGE_OUT)OF_IFRAME` or `APP_STUDIO_WIDGET`).

## `controller`
File which `export default createController` function.

`createController` is called with useful arguments by platform.

Arguments:
### `controllerConfig`
Controller config passed by the platform.

Read more: [IControllerInfo in platform docs](https://bo.wix.com/wix-docs/client/client-viewer-platform/articles/lifecycle#client-viewer-platform_articles_lifecycle_controllerinfo)

### `flowAPI`
Object with experiments, locations and useful helpers passed by the flow to reduce boilerplate on the controller side.

#### `getExperiments`
`() => Promise<Experiments>`

Return a Promise, which will be resolved with `Experiments` instance for current app's scope.
To read more about experiments API, [check Experiments page](https://github.com/wix-private/fed-infra/tree/master/experiments/wix-experiments)

*controller.ts*
```ts
export default async function({ flowAPI }) => {
  return {
    pageReady() {
      const experiments = await flowAPI.getExperiments();
      setProps({
        withNewButton: experiments.enabled('specs.my-scope.EnableNewButton'),
      });
    }
  };
}
```

Parallel loading example to improve your controller performance:

*controller.ts*
```ts
export default async function createController({ flowData }) => {
  return {
    pageReady() {
      const [experiments, someData] = await Promise.all([
        flowData.getExperiments(),
        getSomeData(),
      ]);
      setProps({
        withNewButton: experiments.enabled('specs.my-scope.EnableNewButton'),
        someData,
      });
    }
  };
}
```

#### isSSR
`() => boolean`

Whether or not worker script is being executed in server-side rendering environment.

#### isMobile
`() => boolean`

Current form factor of the `window` is a mobile;

#### getSiteLanguage
`(fallbackLanguage = 'en') => string`

If multilingual is enabled, returns current language for it. If not, returns site language. Will take a fallback language if nothing found.

*controller.ts*
```ts
export default async function({ flowAPI }) => {
  return {
    pageReady() {
      const language = flowAPI.getSiteLanguage();
      const translations = getSiteTranslations(language);

      // ...
    }
  };
}
```

#### reportError
`(error: Error) => void`
A function that comes from already initilized sentryMonitor to capture an exception in your controller.
It will create an error with `Viewer:Worker` environment for your sentry DSN configured in `.application.json`.

`sentryMonitor` is available under `flowAPI.sentryMonitor`

*controller.ts*
```ts
export default async function({ flowAPI }) => {
  return {
    pageReady() {
      try {
        await doSomethingDangerous();
      } catch (e) {
        flowAPI.reportError(e); // or flowAPI.sentryMonotor.captureException(e);
      }

      // ...
    }
  };
}
```

#### fedopsLogger
`BaseLogger<string>` from `@wix/fedops-logger`

Already initialized Fedops Logger instance.

[Read more about Fedops API](https://github.com/wix-private/fed-infra/tree/master/fedops/fedops-logger)

*controller.ts*
```ts
export default async function({ flowAPI, controllerConfig }) => {
  const { fedopsLogger, isSSR, widgetId } = flowAPI;
  fedopsLogger.appLoadStarted();

  return {
    pageReady() {
      const someData = await getSomeData();

      setProps({
        someData,
      });

      if (isSSR()) {
        fedopsLogger.appLoaded({
          appId: controllerConfig.appParams.appDefinitionId,
          widgetId
        });
      }
    }
  };
}
```


## `Widget`
File which `export default` React Component.

This component will be rendered in 2 different environments: viewer (common frame for the whole side) and editor (isolated iFrame).
The basic idea is that developers shouldn't be aware of this difference.
Just exporting a valid React Component and receiving a props from the controller's `setProps` will perfectly work.

*Widget.ts*
```tsx
export default ({ title }) => (<div>
  <h1>{title}</h1>
</div>)
```

*controller.ts*
```tsx
export default () => ({
  pageReady() {
    setProps({
      title: 'Some title from controller',
    });
  }
})
```

## `Settings`
*(optional)*

File which `export default` React Component.

It will be rendered in editor part. Via Settings panel app's user can configure Out-of-iFrame Widget.

It's recommend to use [`wix-base-ui`](https://github.com/wix-private/wix-base-ui) for styling and [TPA Settings](https://github.com/wix-private/tpa-settings) for reducing boilerplate relating to Settings panel development.

*Settings*
```tsx
import { TpaSettingsProvider } from '@wix/tpa-settings/dist/src/contexts';
import { SettingsTabLayout } from '@wix/tpa-settings/dist/src/components';
import { WixSDK } from 'yoshi-flow-editor-runtime';
import 'yoshi-flow-editor-runtime/styles/wix-base-ui.global.scss';

const Settings = () => {
  return (
    <WixSDK>{({ Wix }) => (
      <TpaSettingsProvider Wix={Wix}>
        <SettingsTabLayout>
          <SettingsTabLayout.Tab
            title={t('settings.tab.main')}
            articleId="78c122c7-ef06-47c1-a137-07abfae7ed89"
            Component={() => <MainTab />}
          />
        </SettingsTabLayout>
      </TpaSettingsProvider>
    )}</WixSDK>
  );
};

export default Settings;
```