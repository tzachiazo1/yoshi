import axios from 'axios';
import React, { FC, useMemo, useEffect } from 'react';
import { notifyViewStartLoading } from '@wix/business-manager-api';
import { wixAxiosConfig } from '@wix/wix-axios-config';
import { I18nextProvider, initI18n } from '@wix/wix-i18n-config';
import { COMPONENT_NAME, IBMModuleParams } from './config';
import App from './components/App';

wixAxiosConfig(axios, {
  baseURL: '/',
});

const AppContainer: FC<IBMModuleParams> = ({ locale }) => {
  useEffect(() => {
    notifyViewStartLoading(COMPONENT_NAME);
  }, []);

  const i18n = useMemo(
    () =>
      initI18n({
        locale,
        asyncMessagesLoader: locale2 =>
          import(`./assets/locale/messages_${locale2}.json`),
      }),
    [locale],
  );

  return (
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  );
};

export default AppContainer;
