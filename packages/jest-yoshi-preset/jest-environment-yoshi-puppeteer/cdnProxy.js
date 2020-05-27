const startRewriteForwardProxy = require('yoshi-helpers/build/rewrite-forward-proxy')
  .default;
const { getProjectCDNBasePath } = require('yoshi-helpers/utils');
const { loadYoshiConfig } = require('../load-config');

const { servers, experimentalBuildHtml } = loadYoshiConfig();

let closeProxy;

module.exports.start = async function start(port) {
  closeProxy = await startRewriteForwardProxy({
    search: getProjectCDNBasePath(experimentalBuildHtml),
    rewrite: servers.cdn.url,
    port,
  });
};

module.exports.stop = async function stop() {
  closeProxy && (await closeProxy());
};
