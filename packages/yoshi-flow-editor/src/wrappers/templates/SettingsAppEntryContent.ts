import { SentryConfig } from 'yoshi-flow-editor-runtime/build/constants';
import t from './template';

type Opts = Record<
  'settingsWrapperPath' | 'componentFileName' | 'baseUIPath',
  string
> & {
  sentry: SentryConfig | null;
};

export default t<Opts>`
  import React from 'react';
  import ReactDOM from 'react-dom';
  import SettingsWrapper from '${({ settingsWrapperPath }) =>
    settingsWrapperPath}';
  import Settings from '${({ componentFileName }) => componentFileName}';
  import '${({ baseUIPath }) => baseUIPath}';

  var sentry = ${({ sentry }) =>
    sentry
      ? `{
      DSN: '${sentry.DSN}',
      id: '${sentry.id}',
      projectName: '${sentry.projectName}',
      teamName: '${sentry.teamName}',
    }`
      : 'null'};

  ReactDOM.render(React.createElement(SettingsWrapper(Settings, sentry), null), document.getElementById('root'));
`;
