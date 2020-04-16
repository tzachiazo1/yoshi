import { route, render } from 'yoshi-server';
import { RouteContext } from 'yoshi-server/build/types';

export default route(async function() {
  const renderModel = getRenderModel(this);

  const html = await render('app', renderModel);

  return html;
});

function getRenderModel(context: RouteContext) {
  const { language, basename, debug } = context.req.aspects['web-context'];

  return {
    language,
    basename,
    debug: debug || process.env.NODE_ENV === 'development',
    title: 'Wix Full Stack Project Boilerplate',
    staticsDomain: context.initData.config.clientTopology.staticsDomain,
  };
}
