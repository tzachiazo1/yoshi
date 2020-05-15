import { SentryConfig } from 'yoshi-flow-editor-runtime/build/constants';
import t from './template';

type Opts = Record<
  'widgetWrapperPath' | 'componentFileName' | 'componentName',
  string
> & {
  sentry: SentryConfig | null;
};

export default t<Opts>`
  import WidgetWrapper from '${({ widgetWrapperPath }) => widgetWrapperPath}';
  import Widget from '${({ componentFileName }) => componentFileName}';

  var sentry = ${({ sentry }) =>
    sentry
      ? `{
      DSN: '${sentry.DSN}',
      id: '${sentry.id}',
      projectName: '${sentry.projectName}',
      teamName: '${sentry.teamName}',
    }`
      : 'null'};

  export default { component: WidgetWrapper(Widget, { sentry, name: '${({
    componentName,
  }) => componentName}' })};
`;
