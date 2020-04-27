---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
---

# Getting Started

## Setup

We recommend creating a new Yoshi Server app using the [`create-yoshi-app`](https://wix.github.io/yoshi/docs/getting-started/create-app). It will be available for both Fullstack and Business Manager apps.

```bash
npx create-yoshi-app my-app-name
```

## Manual Setup

##### Prerequisits

- A fullstack app (both server and client are together, using the same `package.json` file).
- We currently support only projects using the `app-flow` ("projectType": "app" in your Yoshi configuration). If you do not use it, please migrate first (see https://wix.github.io/yoshi/docs/guides/app-flow for more details)

Install `yoshi-server` and `yoshi-server-client`:

```
npm install yoshi-server yoshi-server-client
```

Update `yoshi.config.js` of `package.json`'s `yoshi` section:

```diff
"yoshi": {
  "projectType": "app",
+  "yoshiServer": true,
...
}
```

Set your server to handle requests

Yoshi Server will handle server requests by convention (see [api functions]() and [route functions]()). All we have to do is bootstrap it from our `index.js` file:

```js
require("yoshi-server/bootstrap");
```

Now you are ready to add your first Yoshi Server function.

## Adding your first Yoshi Server function

> Yoshi Server is built on conventions. Files with `.api.js` or `.api.ts` extention with named export functions will be treated as [server functions]().

Add a `greeting.api.ts` file to your project (if your project is in Javascript, use `.js` for all examples):

```js
import { method } from "yoshi-server";

export const greeting = method(function(name: string) {
  return {
    greet: `hello ${name}!`,
    name
  };
});
```

Now that we have our first server function (`greeting`), let's consume the data from our client code.

```js
import HttpClient from "yoshi-server-client";
import { greet } from "./greeting.api";

// For Business Manager modules, we map all api requests to '/_api/projectName'
const client = new HttpClient({ baseUrl: "/_api/projectName" });

client.request(greet, "John").then(data => {
  console.log(data.name);
});
```

That's it!
Running `npx yoshi start` will show `hello world` in console.

#### What just happened here?

- `yoshi-server-client` is triggering xhr calls behind the scenes.
- `yoshi-server` will have one endpoint, `_api_` (open devtools and you will be able to see it). All requests are done as `post` requests, with data about the function that we want to call and the arguments.
- If you are using Typescript, server arguments and response are typed!
- For Business Manager modules, all api requests to `/_api/projectName` will be mapped to `/_api_` (Yoshi Server)
