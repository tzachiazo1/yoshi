import * as path from 'path';
import { route, renderView } from 'yoshi-server';
import { RouteContext } from 'yoshi-server/build/types';
import * as WixNodeI18nCache from 'wix-node-i18n-cache';

// caches translation files and serves them per request
// https://github.com/wix-private/wix-node-i18n-cache
const localI18NCache = new WixNodeI18nCache({
  localeFilePath: path.join(__dirname, '..', 'statics', 'assets', 'locales'),
});

export default route(async function() {
  const renderModel = getRenderModel(this);

  renderView(this.res, 'index.ejs', renderModel);
});

function getRenderModel(context: RouteContext) {
  const { language, basename, debug } = context.req.aspects['web-context'];

  return {
    language,
    basename,
    messages: JSON.stringify(localI18NCache.getLocaleData(language)),
    debug: debug || process.env.NODE_ENV === 'development',
    title: 'Wix Full Stack Project Boilerplate',
    staticsDomain: context.config.clientTopology.staticsDomain,
  };
}
