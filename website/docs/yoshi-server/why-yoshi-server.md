---
id: why-yoshi-server
title: Why Yoshi Server
sidebar_label: Why Yoshi Server
---

Currently, setting up a simple frontend [Node Platform](https://github.com/wix-platform/wix-node-platform) server requires a lot boilerplate: Setting up an [index.js](https://github.com/wix/yoshi/blob/master/packages/create-yoshi-app/templates/fullstack/javascript/index.js), [index-dev.js](https://github.com/wix/yoshi/blob/master/packages/create-yoshi-app/templates/fullstack/javascript/index-dev.js), [environment.js](https://github.com/wix/yoshi/blob/master/packages/create-yoshi-app/templates/fullstack/javascript/environment.js) and a somewhat complex [src/server.js](https://github.com/wix/yoshi/blob/master/packages/create-yoshi-app/templates/fullstack/javascript/src/server.js). We generate a lot of files that we don't expect developers to change or understand.

With `yoshi-server`, we take a step closer to including a runtime framework along with Yoshi as a build tool.

### Goals

- Reduce the amount of boilerplate required to write a server.
- Abstract the communication between the client and its server.
- Improve the developer experience with type completions for client-server interactions.
- Show clear error messages from the server in both, the terminal and the browser.
- Minimize the differences between full-stack and client projects.
- Make it easier for us to make non-breaking changes in the future.

### When should I use Yoshi Server?

Yoshi Server can be used whenever we have an API endpoint or a server rendering an HTML page. The question should be, should I have an API endpoint for my use case. If your server API endpoint is only triggering a call to one service, you should skip the server endpoint and use [Ambassador Client](https://github.com/wix-private/ambassador#using-ambassador-http-clients-in-your-frontend-applications).
