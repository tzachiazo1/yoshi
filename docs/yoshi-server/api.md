## Yoshi Server

Currently, setting up a simple [Node Platform](https://github.com/wix-platform/wix-node-platform) server requires a lot boilerplate: Setting up an [index.js](https://github.com/wix/yoshi/blob/master/packages/create-yoshi-app/templates/fullstack/javascript/index.js), [index-dev.js](https://github.com/wix/yoshi/blob/master/packages/create-yoshi-app/templates/fullstack/javascript/index-dev.js), [environment.js](https://github.com/wix/yoshi/blob/master/packages/create-yoshi-app/templates/fullstack/javascript/environment.js) and a somewhat complex [src/server.js](https://github.com/wix/yoshi/blob/master/packages/create-yoshi-app/templates/fullstack/javascript/src/server.js). We generate a lot of files that we don't expect developers to change or understand.

With `yoshi-server`, we take a step closer to including a runtime framework along with Yoshi as a build tool.

### Goals

- Reduce the amount of boilerplate required to write a server.
- Abstract the communication between the client and its server.
- Improve the developer experience with type completions for client-server interactions.
- Show clear error messages from the server in both, the terminal and the browser.
- Minimize the differences between full-stack and client projects.
- Make it easier for us to make non-breaking changes in the future.

### Prerequisits

- A fullstack app (both server and client are together, using the same `package.json` file).
- We currently support only projects using the `app-flow` ("projectType": "app" in your Yoshi configuration). If you do not it, please migrate first (see https://wix.github.io/yoshi/docs/guides/app-flow for more details)
- If you have a server which is rendering an `ejs` file, you will have to use the `htmlWebpackPlugin` ("experimentalBuildHtml": true in your Yoshi configuration). Do not worry, if you are not using it, yet, this migration guide shows how to migrate. This should be pretty straight forward.

### Installation

```
npn install yoshi-server yoshi-server-client
```

### Usage

### Server functions

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

##### context (this)

Our context exposes the following properties:

- req: [Express's](http://expressjs.com) request object
- res: [Express's](http://expressjs.com) response object
- initData: An object returned from a `src/init-server.[j|t]s` file. This data is usefull when you need to read / fetch data on server initialization (for example, read a configuration file).
- context: [wix-bootstrap-ng](https://github.com/wix-platform/wix-node-platform)'s [context](https://github.com/wix-platform/wix-node-platform/tree/master/bootstrap/wix-bootstrap-ng#context) object.

##### method

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

### Invoking a server function from the client

Server functions can be invoked from the client by importing a server function and calling it with arguments. This will trigger an HTTP request to an endpoint on the server that will run the function with the correct arguments and return its response:

```js
import HttpClient from "yoshi-server-client";
import { greet } from "./greeting.api";

const client = new HttpClient({ baseUrl: "http://wix.com" });

client.request(greet, "John").then(data => {
  console.log(data.name);
});
```

### Route functions

Since server functions are consumed from the client, we'll use route functions to expose routes to the outside world. Route functions are similar to server functions and support expressing routes (along with URL parameters) via the filesystem:

- Files in `src/routes` will be mapped to a route on the server with a URL that matches the filesystem. For example, `src/routes/users/create.js` will translate into `/users/create`.
- Named parameters can be used by wrapping the filename or directory name with `[]` and are available to the route function as `this.params`. For example: `src/routes/users/[pid].js` will map into `/users/:pid`.
- Similar to server functions, route files export a single function that returns a response and they can access [Express's](http://expressjs.com) request and response objects from the function context. It's recommended to also wrap them with `route` for type completions:

```js
import { route } from "yoshi-server";

export default route(async function() {
  return {
    name: "world!"
  };
});
```
