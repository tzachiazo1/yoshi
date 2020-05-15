import { SentryConfig } from 'yoshi-flow-editor-runtime/build/constants';
import t from './template';

type Opts = Record<
  | 'editorAppWrapperPath'
  | 'componentFileName'
  | 'controllerFileName'
  | 'viewerAppFileName'
  | 'componentName',
  string
> & {
  sentry: SentryConfig | null;
};

export default t<Opts>`
    import React from 'react';
    import ReactDOM from 'react-dom';
    import EditorAppWrapper from '${({ editorAppWrapperPath }) =>
      editorAppWrapperPath}';

    import UserComponent from '${({ componentFileName }) => componentFileName}';
    import createController from '${({ controllerFileName }) =>
      controllerFileName}';
    import * as viewerApp from '${({ viewerAppFileName }) =>
      viewerAppFileName}';
    var importedApp = viewerApp;

    var componentName = '${({ componentName }) => componentName}';
    var sentry = ${({ sentry }) =>
      sentry
        ? `{
      DSN: '${sentry.DSN}',
      id: '${sentry.id}',
      projectName: '${sentry.projectName}',
      teamName: '${sentry.teamName}',
    }`
        : 'null'};

    var WrappedEditorApp = () => React.createElement(EditorAppWrapper, {
      UserComponent,
      name: componentName,
      sentry,
      userController: createController,
      mapPlatformStateToAppData: importedApp.mapPlatformStateToAppData,
      customInitAppForPage: importedApp.initAppForPage
    });

    ReactDOM.render(React.createElement(WrappedEditorApp, null), document.getElementById('root'));
`;
