---
id: overview
title: Editor Flow Overview
sidebar_label: Editor Flow
---

## Introduction to Out-Of-Iframe
`out-of-iframe`(OOI) is a code name for a platform that enables creating Wix Apps that live in the Viewer's frame. It's similar to the old IFrame TPA but more performant. For more information head to the [official docs](https://bo.wix.com/wix-docs/client/client-frameworks#out-of-iframe).


## Environments
![Untitled-2020-05-13-2148 (1)](https://user-images.githubusercontent.com/1521229/81853295-efc2a300-9564-11ea-9a80-98a71e91664c.png)
Each OOI app is constructed from components which are being consumed by 2 hosts

### Viewer
The component will be rendered in a single frame, like regular Single Page App. It's needed mostly for performance and environemnt consistency between different components.

We shouldn't show settings panel component here, but we'll load the worker code (aka "viewerScript") under the hood. This worker is running in different thread via [Web Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) for performance purposes. Components won't block the main thread with heavy calculations, or requests handling.

### Editor
Currently, applications that are OOI on the Viewer still run inside an iFrame on the Editor.
We'll also emulate worker excecution, so components will act the same between editor and viewer parts.

Moreover, we can have specific Settings Modal (Panel), which will allow users to configure the component. To preserve and share the component's configuration between OOI Widget and Settings we can use [PublicData API](https://dev.wix.com/api/iframe-sdk/sdk/wix.data.public#sdk_wix.data.public_wixdatapublic).


## Components
Conceptually, each component contains the following elements:
* `Widget` or a `Page` - React Component rendered on both Viewer and Editor
* `Settings Panel` - React Component rendered on Editor side [optional]
* `controller` - [Viewer platform controller](https://bo.wix.com/wix-docs/client/client-viewer-platform/articles/lifecycle#client-viewer-platform_articles_lifecycle_createcontrollers), that runs in both in the Viewer and the Editor


## Editor Flow Concept
The main idea of using a specific yoshi flow for building Out-of-iFrame apps is to provide the best development experience with minimum boilerplate and gather shared libraries specific to the editor & viewer platforms.

By creating RFC for different features and trying to create a fruitful discussion with the community, we were able to save a lot of time for developers by providing best practice solutions based on experience.

Moreover, we are actively contributing to the editor & viewer platforms. If we see that some features are missing we make sure to represent the users of the flow and make sure those problems are solved in the platform side as well.

For example, by just running `yoshi-flow-editor start` we'll open both editor and viewer URLs with specific query params forcing the platform to load your local bundles. So w/o additional configuration developers can start working on apps in production environment.

The only thing Editor Flow is requiring from users is to follow a convention. This convention requires having strictly organized file structure, the idea originally taken from [next.js framework](https://nextjs.org/).

## Types of Editor Flow apps
Currently we can support 2 types of apps: **Out of iFrame**  and **Platform**. 
> Theoretically you can mix different types of components in a single app, but it's not tested and we are going to provide more documentation about it after collecting more real-life use-cases.

### Out-of-Iframe
By having a file structure that match Out of iFrame Component, we'll handle it respectively. We'll generate bundles for `Widget`, `Settings`, `viewer` and `editor` scripts.

### Platform apps
For platform apps, we won't expect `Widget.ts` to be present in the project, but still `Settings` will be handled if present. We'll presume you have `editor.controller.ts` and `viewer.controller.ts` files in component's directory.
Moreover, [`@wix/bob-widget-services`](https://github.com/wix-private/bob-widget-services) will be used under the hood to register widgets automatically.
For more info, check [Platform apps support section](./platform-apps-support.md).
