import React from 'react';
import {
  I18nextProvider,
  translate,
  InjectedTranslateProps,
} from 'react-i18next';
import {
  ExperimentsProvider,
  withExperiments,
  InjectedExperimentsProps,
} from '@wix/wix-experiments-react';
import { ExperimentsBag } from '@wix/wix-experiments';
import { TPAComponentsProvider } from 'wix-ui-tpa/TPAComponentsConfig';
import { Button } from 'wix-ui-tpa/Button';

import i18n from '../../../config/i18n';
import styles from './Widget.st.css';

interface WidgetWrapperProps {
  appName: string;
  mobile: boolean;
  language: string;
  translations: Record<string, string>;
  experiments: ExperimentsBag;
}

type WidgetProps = InjectedExperimentsProps &
  InjectedTranslateProps &
  Pick<WidgetWrapperProps, 'appName'>;
export default class extends React.Component<WidgetWrapperProps> {
  render() {
    const { appName, experiments, language, translations, mobile } = this.props;

    return (
      <ExperimentsProvider options={{ experiments }}>
        <TPAComponentsProvider value={{ mobile }}>
          <I18nextProvider i18n={i18n({ language, translations })}>
            <Widget appName={appName} />
          </I18nextProvider>
        </TPAComponentsProvider>
      </ExperimentsProvider>
    );
  }
}

export const Widget = translate()(
  withExperiments<WidgetProps>(({ appName, t, ...rest }: WidgetProps) => {
    return (
      <div {...styles('root', {}, rest)} data-hook="CleanList-wrapper">
        <div className={styles.header}>
          <h2 data-hook="app-title">
            {t('app.widget.welcome')} {appName}!
          </h2>
        </div>
        <Button className={styles.mainButton}>Click me</Button>
      </div>
    );
  }),
);
