---
id: testing
title: Testing
sidebar_label: Testing
---

# Testing

## Server E2E tests

Calling the server from a server e2e test can been done exactly like we call it from the client. For example:

```js
import HttpClient from "yoshi-server-client";
import { greet } from "../src/api/greeting.api";

const client = new HttpClient({
  baseUrl: "http://localhost:3000"
});

test("should reject on a JSON response", async () => {
  const response = client.request({
    method: greet,
    args: ["Yaniv"]
  });

  await expect(response).rejects.toThrow("An error occured inside greet");
});
```

## Component tests

When writing a component test for a component which uses `yoshi-server-client`, we should mock the server request (there's no server when running component tests).
In order to do that we use the `yoshi-server-testing` package:

#### Installation

```
npm install --save-dev yoshi-server-testing
```

#### a spec test example

```js
import React from "react";
import ReactDOM from "react-dom";
import HttpClient from "yoshi-server-testing";
import eventually from "wix-eventually";
import Component from "./component";
import { greet } from "./api/greeting.api";

const mocks = [
  {
    request: { fn: greet, variables: ["Yaniv"] },
    result: () => ({
      greeting: "Hello Yaniv"
    })
  }
];

const httpClientMock = new HttpClient(mocks);

it("should pass", async () => {
  const div = document.createElement("div");
  ReactDOM.render(<Component httpClient={httpClientMock} />, div);
  return eventually(() => {
    expect(div.innerHTML).toMatch("Hello Yaniv");
  });
});
```

Instead of passing `HttpClient` from `yoshi-server`, we will pass the `HttpClient` from `yoshi-server-testing` as a prop to the component. This `HttpClient` will have the mocks that we want.
