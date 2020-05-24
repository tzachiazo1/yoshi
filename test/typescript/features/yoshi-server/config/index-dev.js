const configEmitter = require('@wix/wix-config-emitter');
const { bootstrapServer } = require('yoshi-server');

(async () => {
  const app = bootstrapServer();
  await configEmitter()
    .val('hello', 'foo')
    .emit();
  process.env.APP_CONF_DIR = require('path').resolve('./test/configs');
  await app.start();
})();
