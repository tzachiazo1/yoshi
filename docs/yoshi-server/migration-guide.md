## Migrating an Existing Project

### Prerequisits

- A fullstack app (both server and client are together, using the same `package.json` file).
- We currently support only projects using the `app-flow` ("projectType": "app" in your Yoshi configuration). If you do not it, please migrate first (see https://wix.github.io/yoshi/docs/guides/app-flow for more details)
- If you have a server which is rendering an `ejs` file, you will have to use the `htmlWebpackPlugin` ("experimentalBuildHtml": true in your Yoshi configuration). Do not worry, if you are not using it, yet, this migration guide shows how to migrate. This should be pretty straight forward.

### Install dependencies

```
npn install yoshi-server yoshi-server-client
```

### Update `yoshi` config to use `yoshi-server`

```diff
"yoshi": {
  "projectType": "app",
+  "experimentalBuildHtml": true, // needed only if you have a server which is rendering an `ejs` file
+  "yoshiServer": true,
...
}
```

Please note:

- Yoshi Server is only supported together with `app-plow` ("projectType": "app"). In case you are do not use it yet, please migrate: https://wix.github.io/yoshi/docs/guides/app-flow

- The `experimentalBuildHtml` is needed only in case that you have a server which is rendering an `ejs` file. This should be a simple setup - we'll try to guide you through it here.

### Rendering a page using Yoshi Server

Please skip this step if your server does not render an `ejs` file.

We want the migration to be gradual, in baby steps, so the first step will be adding a Yoshi Server custom server, which will handle the main route for rendering the your `ejs` file:

#### Step 1:

In your server file (ususally `server.js`/`server.ts`), add a new endpoint to handle yoshi-server rendering route. You can first give it a new endpoint, in order to test it in production without changing the current rendering endpoint.

// server.js / server.ts

```diff

+ import { Server } from 'yoshi-server'

export default hot(module, async (app, context) => {
  // create a yoshi-server instance
+ const server = await Server.create(context);

  app.get('/api, async (req, res) => {
    //some code
  });

  // move all "unhandled" requests to be handled by Yoshi Server
+ app.all('*', server.handle);

});
```
