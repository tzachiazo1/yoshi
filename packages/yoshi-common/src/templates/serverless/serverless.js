const { Server } = require('yoshi-serverless');

module.exports = functionsBuilder => {
  return functionsBuilder
    .addWebFunction('POST', '*', async (ctx, req) => {
      const server = await Server.create(ctx);
      const result = await server.handle(req);

      return result;
    })
    .addWebFunction('GET', '*', async (ctx, req) => {
      const server = await Server.create(ctx);
      const result = await server.handle(req);

      return result;
    });
};
