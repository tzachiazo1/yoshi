---
id: custom-server
title: Custom Server
sidebar_label: Custom Server
---

# Custom Server

If you have custom middleware, routing, db connection etc, you can have your own server, which will handle the routes and then delegate to Yoshi Server. This is also very useful when having a gradual migration to Yoshi Server.

```js
import Server from "yoshi-server";

export default async (app, context) => {
  const server = Server.create(context);

  // Use custom middleware, routing, db connection
  // or even mount `yoshi-server` on a different path
  app.get("/foo", (req, res) => {
    res.send("bar");
  });

  app.all("*", server.handle);

  return app;
};
```
