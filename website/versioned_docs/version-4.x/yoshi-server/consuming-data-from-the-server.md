---
id: consuming-data-from-the-server
title: Consuming Data from the Server
sidebar_label: Consuming Data from the Server
---

### Server functions

> We use frontend server only for cases that we have data aggregation from multiple services. If you have a call to one platform service, use [Ambassador Client](https://github.com/wix-private/ambassador#using-ambassador-http-clients-in-your-frontend-applications)

In Yoshi Server, a server function is a way of exposing data from your server to the client.
Server Functions are named exports, inside a file with an `*.api.[j|t]s` extension.

In the following example we use [Ambassador](https://github.com/wix-private/ambassador) to fetch the user's recently viewed sites, from `wix-user-preferences-webapp` service, and then, fetch additional data about this site from the `wix-meta-site-manager-webapp` service.

```js
import { method } from "yoshi-server";
import { WixUserPreferencesWebapp } from '@wix/ambassador-wix-user-preferences-webapp/rpc';
import { WixMetaSiteManagerWebapp } from '@wix/ambassador-wix-meta-site-manager-webapp/rpc';

const userPreferencesService = WixUserPreferencesWebapp().UserPreferencesService();
const siteListFacadeService = WixMetaSiteManagerWebapp().SiteListFacade();

export const sites = method(function(pageSize: number) {
  const recentlyViewedSites = await userPreferencesService(
    this.req.aspects,
  ).get({
    userId: this.req.aspects.session.userGuid,
    nameSpace: 'dashboard-recently-viewed-site',
    key: 'recently-viewed-sites',
  });

  return siteListFacadeService(this.req.aspects).list({
    userId: this.req.aspects.session.userGuid,
    recentlyViewedSites: recentlyViewedSites[0].blob.sites.map(
      ({ id, viewedOn }) => ({
        id,
        dateViewed: viewedOn,
      }),
    ),
    pageSize,
  });
});
```

A Server function can be invoked from the client by importing and calling it with arguments.

---

For example, let's initialize `yoshi-server-client` in our main `client.ts` file, and pass it as a prop to our components:

```js
import React from "react";
import ReactDOM from "react-dom";
import HttpClient from "yoshi-server-client";
import Component from "./component";

const client = new HttpClient();

ReactDOM.render(
  <Component httpClient={client} />,
  document.getElementById("root")
);
```

Now we import our server function and call it using a `httpClient.request` call:

```js
// component.tsx
import React from "react";
import { HttpClient } from "yoshi-server-client";
import { sites } from "./api/data.api";

interface PropsType {
  httpClient: HttpClient;
}

export default class App extends React.Component<PropsType> {
  state = { sites: [] };
  async componentDidMount() {
    const { httpClient } = this.props;
    const result = await httpClient.request(sites)(10);
    this.setState({ sites: result.sites });
  }

  render() {
    return (
      <div>
        <h2 id="my-text">
          {this.state.sites.map((site, index) => (
            <div key={index}>{site.name}</div>
          ))}
        </h2>
      </div>
    );
  }
}
```

How does it work?

- When importing a server function, we have a Webpack loader that returns an object with types (try running: `console.log(sites);` on the client and see for yourself).
- Yoshi Server runtime triggers a post call to `/_api_`, with details about the request, and arguments (open the network tab and see for yourself).
- Server file is not bundled with client code!
- When using Typescript, the response and the request arguments are fully typed!

### React Bindings

Instead of passing `httpClient` all over, consider using the [React Bindings](react-binding).

### method

`method` is a helper function used to add typing for our context (this). It works both in Javascript and Typescript code.

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

### context (this)

If you need to access data (such as request, response, Bootstrap Context, and more) from your server function, these are the values that are available on context (this):

| name     | type                                                                      | description                                                                                                                                                                                                                                                   |
| -------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| req      | [Request](https://github.com/types/express/blob/master/lib/request.d.ts)  | [Express's](http://expressjs.com) request object                                                                                                                                                                                                              |
| res      | [Response](https://github.com/types/express/blob/master/lib/request.d.ts) | [Express's](http://expressjs.com) response object                                                                                                                                                                                                             |
| initData | any                                                                       | An object returned from a `src/init-server.js` / `src/init-server.ts` file. This data is useful when you need to read/fetch data on server initialization (for example, read a configuration file).                                                           |
| context  | BootstrapContext                                                          | [wix-bootstrap-ng](https://github.com/wix-platform/wix-node-platform)'s [context](https://github.com/wix-platform/wix-node-platform/tree/master/bootstrap/wix-bootstrap-ng#context) object.                                                                   |
| config   | any                                                                       | an object containing the project's `.erb` configuration file. Loading this object is done by convention, assuming the `.erb` file is called the same as the project's name in `package.json` (stripping organization name, if exists). see the example below. |

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

And anywhere in your route / server functions:

```
console.log(this.config.hello); // logs 'world'
```
