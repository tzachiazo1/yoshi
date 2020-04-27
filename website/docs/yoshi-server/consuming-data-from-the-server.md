---
id: consuming-data-from-the-server
title: Consuming Data from the Server
sidebar_label: Consuming Data from the Server
---

> Yoshi Server makes it easier to consume data from the server by adding an abstraction over client server communication, using conventions.

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

Server functions can be invoked from the client by importing a server function and calling it with arguments.

Let's initialize `yoshi-server-client` in our main `client.ts` file, and pass it as a prop to our components:

```js
import React from "react";
import ReactDOM from "react-dom";
import HttpClient from "yoshi-server-client";
import Component from "./component";

const client = new HttpClient({ baseUrl: "/_api/projectName" });

ReactDOM.render(
  <Component httpClient={client} />,
  document.getElementById("root")
);
```

Now we import our server function and call it using a `httpClient.request` request:

```js
// component.tsx
import React from "react";
import { HttpClient } from "yoshi-server-client";
import { greet } from "./api/greeting.api";

interface PropsType {
  httpClient: HttpClient;
}

export default class App extends React.Component<PropsType> {
  state = { text: "" };
  async componentDidMount() {
    const { httpClient } = this.props;
    const result = await httpClient.request({ method: greet, args: ["world"] });
    this.setState({ text: result.greeting });
  }

  render() {
    return (
      <div>
        <h2 id="my-text">{this.state.text}</h2>
      </div>
    );
  }
}
```

How does it work?

- When importing a server function, we have a Webpack loader that returns an object with types (try running: `console.log(greet);` on the client and see for yourself).
- Yoshi Server runtime will trigger a post call to `/_api_`, with details about the request, and arguments (open the network tab and see for yourself).
- Server file will not be bundled with client code!
- When using Typescript, the response and the request arguments are fully typed!

### API

#### React API

Instead of passing `httpClient` all over, consider using the [React Bindings]().

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

#### context (this)

If you need to access data (such as request, response, Bootstrap Context and more) from your server function, these are the values that are available on context (this):

| name     | type                                                                      | description                                                                                                                                                                                                                                                  |
| -------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| req      | [Request](https://github.com/types/express/blob/master/lib/request.d.ts)  | [Express's](http://expressjs.com) request object                                                                                                                                                                                                             |
| res      | [Response](https://github.com/types/express/blob/master/lib/request.d.ts) | [Express's](http://expressjs.com) response object                                                                                                                                                                                                            |
| initData | any                                                                       | An object returned from a `src/init-server.js` / `src/init-server.ts` file. This data is usefull when you need to read / fetch data on server initialization (for example, read a configuration file).                                                       |
| context  | BootstrapContext                                                          | [wix-bootstrap-ng](https://github.com/wix-platform/wix-node-platform)'s [context](https://github.com/wix-platform/wix-node-platform/tree/master/bootstrap/wix-bootstrap-ng#context) object.                                                                  |
| config   | any                                                                       | an object containg the project's `.erb` configuration file. Loading this object is done by convention, assuming the `.erb` file will be called the same as the project's name in `package.json` (stripping organization name, if exists). see example below. |

Config object example:

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
console.log(this.config.hello); // logs 'world'
```
