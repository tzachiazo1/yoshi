---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
---

# Getting Started

Setting a Yoshi Server for a new project is pretty straightforward. If you want to migrate an existing project, please take a look at Migrating to Yoshi Server (TBD).

If you are generating a fullstack project using the [Create Yoshi App](https://wix.github.io/yoshi/docs/getting-started/create-app), the Yoshi Server setup is already done for you.

### Prerequisits

- A fullstack app (both server and client are together, using the same `package.json` file).
- We currently support only projects using the `app-flow` ("projectType": "app" in your Yoshi configuration). If you do not use it, please migrate first (see https://wix.github.io/yoshi/docs/guides/app-flow for more details)

### Installation

```
npm install yoshi-server yoshi-server-client
```

### Setup

##### Update your Yoshi Config:

```diff
"yoshi": {
  "projectType": "app",
+  "yoshiServer": true,
...
}
```

##### Set your server to handle requests

Yoshi Server will handle server requests by convention (see [api functions]() and [route functions]()). All we have to do is bootstrap it from our `index.js` file:

```js
require("yoshi-server/bootstrap");
```
