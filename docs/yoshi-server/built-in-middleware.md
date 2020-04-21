---
id: built-in-middleware
title: Built-in Middleware
sidebar_label: Built-in Middleware
---

# Built-in Middleware

If you must use custom middlewares, you can have a custom server, apply middlewares, and then register yoshi server handler.

We did wrap some common middleares (for now the `bo-auth` and `require-login`). You can use them like this:

```js
import * as boAuth from "yoshi-server/build/bo-auth";

export const search = method(async function(text = "") {
  await boAuth.forbid(this);
  // ...
});
```
