---
id: initializing-server-data
title: Initializing Server Data
sidebar_label: Initializing Server Data
---

# Initializing Server Data

Sometimes we want to load some data only once, during server initialization. With Yoshi Server, this entry point is the `src/init-server.[j|t]s` file.

This file should have a function that receives the node-platform's [context](https://github.com/wix-platform/wix-node-platform/tree/master/bootstrap/wix-bootstrap-ng#context) object, and returns an object, which will be available later for each route/api function, under `this.initData`:

```js
// src/init-server.ts
import { BootstrapContext } from "@wix/wix-bootstrap-ng/typed";
export default async (context: BootstrapContext) => {
  return {
    myData: "hello world"
  };
};
```

Then in your functions / routes:

```js
import { method } from "yoshi-server";

export const greeting = method(function(age: number) {
  console.log(this.initData.myData); // logs 'hello world'

  return {
    name: `world! ${age}`,
    age
  };
});
```
