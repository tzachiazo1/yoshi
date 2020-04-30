# Yoshi Server

Currently, setting up a simple [Node Platform](https://github.com/wix-platform/wix-node-platform) server requires a lot boilerplate: Setting up an [index.js](https://github.com/wix/yoshi/blob/master/packages/create-yoshi-app/templates/fullstack/javascript/index.js), [index-dev.js](https://github.com/wix/yoshi/blob/master/packages/create-yoshi-app/templates/fullstack/javascript/index-dev.js), [environment.js](https://github.com/wix/yoshi/blob/master/packages/create-yoshi-app/templates/fullstack/javascript/environment.js) and a somewhat complex [src/server.js](https://github.com/wix/yoshi/blob/master/packages/create-yoshi-app/templates/fullstack/javascript/src/server.js). We generate a lot of files that we don't expect developers to change or understand.

With `yoshi-server`, we take a step closer to including a runtime framework along with Yoshi as a build tool.

### Goals

- Reduce the amount of boilerplate required to write a server.
- Abstract the communication between the client and its server.
- Improve the developer experience with type completions for client-server interactions.
- Show clear error messages from the server in both, the terminal and the browser.
- Make it easier for us to make non-breaking changes in the future.

### Prerequisits

- A fullstack app (both server and client are together, using the same `package.json` file).
- We currently support only projects using the `app-flow` ("projectType": "app" in your Yoshi configuration). If you do not it, please migrate first (see https://wix.github.io/yoshi/docs/app-flow for more details)

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

There are two ways for adding Yoshi Server to handle requests:

- Using `yoshi-server/bootstrap`:

  Change your `index.js` file to be:

  ```js
  require("yoshi-server/bootstrap");
  ```

# API

## Server functions

Server functions are defined as named exports from files with an `*.api.[j|t]s` extension:

```js
import { method } from "yoshi-server";

export const greeting = method(function(name: string) {
  return {
    greet: `hello ${name}!`,
    name
  };
});
```

#### context (this)

Our context exposes the following properties:

- req: [Express's](http://expressjs.com) request object
- res: [Express's](http://expressjs.com) response object
- initData: An object returned from a `src/init-server.[j|t]s` file. This data is usefull when you need to read / fetch data on server initialization (for example, read a configuration file).
- context: [wix-bootstrap-ng](https://github.com/wix-platform/wix-node-platform)'s [context](https://github.com/wix-platform/wix-node-platform/tree/master/bootstrap/wix-bootstrap-ng#context) object.

#### method

`method` is a helper function used to add typing for our context (this). This will work both in Javascript and Typescript code.

```js
import { method } from "yoshi-server";

export const greeting = method(function(age: number) {
  // Adds type completions for `this`
  console.log(this.req);

  return {
    name: `world! ${age}`,
    age
  };
});
```

## Invoking a server function from the client

Server functions can be invoked from the client by importing a server function and calling it with arguments. This will trigger an HTTP request to an endpoint on the server that will run the function with the correct arguments and return its response:

```js
import HttpClient from "yoshi-server-client";
import { greet } from "./greeting.api";

const client = new HttpClient({ baseUrl: "http://wix.com" });

client.request(greet, "John").then(data => {
  console.log(data.name);
});
```

## Route functions

Since server functions are consumed from the client, we'll use route functions to expose routes to the outside world. Route functions are similar to server functions and support expressing routes (along with URL parameters) via the filesystem:

Files in `src/routes` will be mapped to a route on the server with a URL that matches the filesystem. For example, `src/routes/users/create.js` will translate into `/users/create`.

```js
//src/routes/app.js
import { route } from "yoshi-server";

export default route(async function() {
  return {
    name: "world!"
  };
});
```

We can then call this route on:

http://www.mydomain.com/app

#### Route with params

Named parameters can be used by wrapping the filename or directory name with `[]` and are available to the route function as `this.params`. For example: `src/routes/users/[userid].js` will map into `/users/:userid`:

```js
//src/routes/users/[userid].js
import { route } from "yoshi-server";

export default route(async function() {
  return {
    data: `hello ${this.params.userid}`
  };
});
```

We can then call this route on:

http://www.mydomain.com/users/123

#### Default route

Default route ('/') can be used by adding an `index.[j|t]s` file:
`//src/routes/index.js`

You will then be able to access it on:

http://www.mydomain.com

#### Rendering an `ejs` template from a route

Rendering EJS templates should be done by importing and calling render(). It accepts a template name and data, looks for it in src/templates, and returns the resulting HTML:

```js
import { render, route } from "yoshi-server";

export default route(async function() {
  const html = await render("app", {
    title: "hello world"
  });

  return html;
});
```

#### context (this)

Our context exposes the following properties:

- req: [Express's](http://expressjs.com) request object
- res: [Express's](http://expressjs.com) response object
- initData: An object returned from a `src/init-server.[j|t]s` file. This data is usefull when you need to read / fetch data on server initialization (for example, read a configuration file).
- context: [wix-bootstrap-ng](https://github.com/wix-platform/wix-node-platform)'s [context](https://github.com/wix-platform/wix-node-platform/tree/master/bootstrap/wix-bootstrap-ng#context) object.

#### route

`route` is a helper function used to add typing for our context (this). This will work both in Javascript and Typescript code.

```js
import { route } from "yoshi-server";

export default route(async function() {
  // Adds type completions for `this`
  console.log(this.req);

  return {
    name: "world!"
  };
});
```

## Middlewares

If you must use custom middlewares, you can have a custom server, apply middlewares, and then register yoshi server handler.

We did wrap some common middleares (for now the `bo-auth` and `require-login`). You can use them like this:

```js
import * as boAuth from "yoshi-server/build/bo-auth";

export const search = method(async function(text = "") {
  await boAuth.forbid(this);
  // ...
});
```

## Errors

// TBD

## HMR

// TBD

## Testing

// TBD

## React API for client server invokation

Instead of passing `HttpClient` all around, we can use Yoshi Server React API:

##### Istallation:

```js
npm install yoshi-server-react
```

##### Usage

```
//client.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import HttpClient from 'yoshi-server-client';
import { HttpProvider } from 'yoshi-server-react';
import App from './components/App';

const client = new HttpClient();

ReactDOM.render(
  <HttpProvider client={client}>
    <App />
  </HttpProvider>,
  document.getElementById('root'),
);
```

```js
// App.tsx
import React from "react";
import { useRequest } from "yoshi-server-react";
import { greet } from "../../api/greeting.api";

const App = () => {
  const req = useRequest(greet, "Yaniv");

  if (req.loading) {
    return <p data-testid="loading">Loading...</p>;
  }

  if (req.error) {
    return <p data-testid="error">Error :(</p>;
  }

  return (
    <div>
      <h2>{req.data.greeting}</h2>
    </div>
  );
};

export default App;
```
