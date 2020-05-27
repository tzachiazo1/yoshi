const readPkg = require('read-pkg');

const config = {
  server: {
    command: 'node dist/server.js',
    port: 3100,
  },
  puppeteer: {
    // launch options: https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#puppeteerlaunchoptions
    // debugging tips: https://github.com/GoogleChrome/puppeteer#debugging-tips
    devtools: false,
    ignoreHTTPSErrors: true,
    args: [
      '--allow-insecure-localhost',
      '--no-sandbox',
      '--disable-setuid-sandbox',
    ],
  },
};

const shouldUse = () => {
  const pkgJson = readPkg.sync({ cwd: process.cwd() });
  const { devDependencies = [], dependencies = [] } = pkgJson;

  return (
    devDependencies['yoshi-flow-editor'] || dependencies['yoshi-flow-editor']
  );
};

module.exports = {
  config,
  shouldUse,
};
