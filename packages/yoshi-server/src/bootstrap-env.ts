export const bootstrapServer = () => {
  const testkit = require('@wix/wix-bootstrap-testkit');
  return testkit.app(require.resolve('./bootstrap-ng'), {
    env: {
      ...process.env,
    },
  });
};
