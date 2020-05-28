const readPkg = require('read-pkg');

const getJestConfig = () => ({
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
});

const getYoshiConfig = () => {
  const yoshiConfig = require('yoshi-config');
  yoshiConfig.servers.cdn.ssl = true;
  yoshiConfig.servers.cdn.url = `https://localhost:${yoshiConfig.servers.cdn.port}`;
  return yoshiConfig;
};

const shouldUse = () => {
  const pkgJson = readPkg.sync({ cwd: process.cwd() });
  const { devDependencies = {}, dependencies = {} } = pkgJson;

  return (
    devDependencies['yoshi-flow-editor'] || dependencies['yoshi-flow-editor']
  );
};

module.exports = {
  getJestConfig,
  getYoshiConfig,
  shouldUse,
};
