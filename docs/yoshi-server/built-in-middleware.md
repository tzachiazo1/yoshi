---
id: built-in-middleware
title: Built-in Middleware
sidebar_label: Built-in Middleware
---

# Built-in Middleware

We wrapped some common middleares (for now the `bo-auth` and `require-login`), so it can be used as a promises:

```js
import * as boAuth from "yoshi-server/build/bo-auth";

export const search = method(async function(text = "") {
  await boAuth.forbid(this); //using the middleware
  // ...
});
```

If you want to use custom middlewares, ou can have a [custom server]().
