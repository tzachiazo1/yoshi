export const bootstrapServer = () => {
  const testkit = require('@wix/wix-bootstrap-testkit');
  return testkit.app(require.resolve('./bootstrap-ng'), {
    env: {
      ...process.env,
      // APP_CONF_DIR: require('path').resolve('./test/configs'),
    },
  });
};
