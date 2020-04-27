---
id: react-binding
title: React Binding
sidebar_label: React Binding
---

Instead of passing `HttpClient` all around, we can use Yoshi Server's React API.

##### Istallation:

```js
npm install yoshi-server-react
```

##### Usage

```js
//client.tsx
import React from "react";
import ReactDOM from "react-dom";
import HttpClient from "yoshi-server-client";
import { HttpProvider } from "yoshi-server-react";
import App from "./components/App";

const client = new HttpClient();

ReactDOM.render(
  <HttpProvider client={client}>
    <App />
  </HttpProvider>,
  document.getElementById("root")
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

#### How does it work?

Yoshi Server React API will use [React Context](https://reactjs.org/docs/context.html) in order to pass `Yoshi Server HttpClient` instance. You can then use access it via the `useRequest` hook, in order to trigger a request (`httpClient.request`).
