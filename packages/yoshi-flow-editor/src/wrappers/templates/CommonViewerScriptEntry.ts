import {
  WidgetType,
  SentryConfig,
} from 'yoshi-flow-editor-runtime/build/constants';
import t from './template';

export type TemplateControllerConfig = {
  id: string | null;
  controllerFileName: string;
  widgetType: WidgetType;
};

type Opts = {
  viewerScriptWrapperPath: string;
  viewerAppFileName: string;
  sentry: SentryConfig | null;
  controllersMeta: Array<TemplateControllerConfig>;
};

const getControllerVariableName = (index: number) => `controller${index}`;

const importsForControllers = t<{
  controllersMeta: Array<TemplateControllerConfig>;
}>`
  ${({ controllersMeta }) => {
    return controllersMeta
      .map((controller, i) => {
        return `import ${getControllerVariableName(i)} from '${
          controller.controllerFileName
        }';`;
      })
      .join('\n');
  }}
`;

const controllerConfigs = t<{
  controllersMeta: Array<TemplateControllerConfig>;
}>`${({ controllersMeta }) =>
  controllersMeta
    .map(
      (controller, i) =>
        `{ method: ${getControllerVariableName(i)},
          widgetType: "${controller.widgetType}",
          id: ${controller.id ? `"${controller.id}"` : controller.id} }`,
    )
    .join(', ')}`;

export default t<Opts>`
  import {createControllersWithDescriptors, initAppForPageWrapper} from '${({
    viewerScriptWrapperPath,
  }) => viewerScriptWrapperPath}';
  ${({ controllersMeta }) => importsForControllers({ controllersMeta })}
  import * as viewerApp from '${({ viewerAppFileName }) => viewerAppFileName}';
  var importedApp = viewerApp;

  var sentry = ${({ sentry }) =>
    sentry
      ? `{
      DSN: '${sentry.DSN}',
      id: '${sentry.id}',
      projectName: '${sentry.projectName}',
      teamName: '${sentry.teamName}',
    }`
      : 'null'};

  export const initAppForPage = initAppForPageWrapper(importedApp.initAppForPage, sentry);
  export const createControllers = createControllersWithDescriptors([${({
    controllersMeta,
  }) =>
    controllerConfigs({
      controllersMeta,
    })}], importedApp.mapPlatformStateToAppData);
`;
