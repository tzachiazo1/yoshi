---
id: react-binding
title: React Binding
sidebar_label: React Binding
---

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
