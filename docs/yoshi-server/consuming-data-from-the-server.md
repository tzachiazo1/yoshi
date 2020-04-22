---
id: consuming-data-from-the-server
title: Consuming Data from the Server
sidebar_label: Consuming Data from the Server
---

# Consuming Data from the Server

Yoshi Server adds an abstraction over client server communication, using conventions.

### Server functions

Server functions are meant to expose api endpoints to our client, and are defined as named exports from files with an `*.api.[j|t]s` extension:

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
- config: an object containg the project's `.erb` configuration file. Loading this object is done by convention, assuming the `.erb` file will be called the same as the project's name in `package.json` (stripping organization name, if exists). For example:

```json
//package.json
{
  "name": "@wix/my-cool-project",
  ...
}
```

Then your `.erb` file should be:

```json
// templates/my-cool-project.json.erb
{
  "hello": "world"
}
```

And anywhere in your route / api functions:

```
console.log(this.config.hello); //logs 'world'
```

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

When using Typescript, the response and the request arguments are fully typed!
