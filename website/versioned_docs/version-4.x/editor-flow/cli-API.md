---
id: cli-API
title: CLI API
sidebar_label: CLI API
---

The Yoshi Flow Editor CLI allows you to start, build, test and lint your application.

To get a list of the available CLI commands, run the following command inside your project directory: `yoshi-flow-editor --help`

## Start
```
yoshi-flow-editor start
```
Runs the app in development mode and opens viewer and editor URLs with configured query params to load the app from a local environment.
It will create 2 local server processes under the hood:
- CDN to serve statics. You can access any resource from the `dist` directory via port `3200`:

|Resource|URL|
|---|---|
|`Widget`|`localhost:3200/[:componentName]ViewerWidget.bundle.js`|
|`viewerScript`|`localhost:3200/viewerScript.bundle.js`|
|`editorScript`|`localhost:3200/editorScript.bundle.js`|


- Server for editor component and settings panel locally via port `3000`.

|Component|URL|
|---|---|
|Editor|`localhost:3000/editor/[:componentName]`|
|Settings panel|`localhost:3000/settings/[:componentName]`|

### `--production`
Will create minified bundles to emulate production build during the local experience.

## Build
```
yoshi-flow-editor build
```
Build an optimized version of your app for production environment. Generated artifacts should be available under the `dist` directory.

- Creates minified `Widget`, `viewerScript` and `editorScript` bundles. (ex. `dist/buttonViewerWidget.bundle.min.js`)
- Generates editor and settings `.html`s under `dist/editor/[:componentName].html` file. It could be used as an editor and settings panel URLs on production. If you are using a server to serve the editor part, you can still find the `.vm` files at the same locations.

### `--analyze`
Builds the app and opens bundle analysis results. (visual statistics for widget and worker bundles)

## Test
```
yoshi-flow-editor test
```
Start your test with the configured test runner (Jest by default).

### `--watch`
Start tests in watch mode.

## Lint
```
yoshi-flow-editor lint
```
Runs linter configured on your working files.

### `--fix`
Runs linter and tries to fix issues in your codebase. Fixes are syntax-aware so you won't experience errors introduced by traditional find-and-replace algorithms.
