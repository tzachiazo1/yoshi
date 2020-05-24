const {
  createTestkit,
  testkitConfigBuilder,
  anAppConfigBuilder,
} = require('@wix/business-manager/dist/testkit');

const getTestKitConfig = async (
  { withRandomPorts } = { withRandomPorts: false },
  app,
) => {
  const serverUrl = 'http://localhost:3200/';
  const serviceId = 'com.wixpress.{%projectName%}';
  const path = './app-config-templates/module_{%PROJECT_NAME%}.json';

  const moduleConfig = anAppConfigBuilder()
    .fromJsonTemplate(require(path)) //  replace this line with the next once your config is merged
    // .fromModuleId('{%PROJECT_NAME%}')
    .withArtifactMapping({ [serviceId]: { url: serverUrl } })
    .build();

  let builder = testkitConfigBuilder()
    .registerApi({
      serviceId: '{%projectName%}',
      serverUrl: app.getUrl(),
    })
    .withModulesConfig(moduleConfig)
    .autoLogin();

  if (withRandomPorts) {
    builder = builder.withRandomPorts();
  }

  return builder.build();
};

module.exports.environment = async (app, envConfig) => {
  const bmApp = createTestkit(await getTestKitConfig(envConfig, app));
  return {
    bmApp,
  };
};
