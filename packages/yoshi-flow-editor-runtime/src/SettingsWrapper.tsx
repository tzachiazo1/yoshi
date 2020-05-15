import React, { Suspense } from 'react';
import SentryGlobal from '@sentry/browser';
import { PublicDataProvider } from './react/PublicData/PublicDataProvider';
import { ErrorBoundary } from './react/ErrorBoundary';
import { getEditorParams } from './utils';
import { SDKProvider } from './react/SDK/SDKProvider';
import { SDK } from './react/SDK/SDKRenderProp';
import { IWixSDKEditorEnvironmentContext } from './react/SDK/SDKContext';
import { SentryConfig } from './constants';

interface SettingsWrapperProps {
  __publicData__: Record<string, any>;
}

declare global {
  interface Window {
    Sentry: typeof SentryGlobal;
  }
}

const SettingsWrapper = (
  UserComponent: typeof React.Component,
  sentry: SentryConfig | null,
) => (props: SettingsWrapperProps) => {
  const { editorSDKSrc } = getEditorParams();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SDKProvider editorSDKSrc={editorSDKSrc}>
        <SDK editorSDKSrc={editorSDKSrc}>
          {sdk => {
            if (!sentry) {
              return (
                <ErrorBoundary handleException={err => console.log(err)}>
                  <PublicDataProvider sdk={sdk} data={props.__publicData__}>
                    <UserComponent />
                  </PublicDataProvider>
                </ErrorBoundary>
              );
            }
            return (
              <ErrorBoundary
                handleException={window.Sentry.captureException}
                configure={() => {
                  window.Sentry.init({ environment: 'Editor' });

                  const Wix = sdk
                    ? (sdk as IWixSDKEditorEnvironmentContext).Wix
                    : null;
                  if (Wix) {
                    window.Sentry.configureScope(scope => {
                      scope.setTag(
                        'msid',
                        Wix.Utils.getInstanceValue('metaSiteId'),
                      );
                      scope.setUser({
                        id: Wix.Utils.getInstanceValue('uid'),
                      });
                    });
                  }
                }}
              >
                <PublicDataProvider sdk={sdk} data={props.__publicData__}>
                  <UserComponent />
                </PublicDataProvider>
              </ErrorBoundary>
            );
          }}
        </SDK>
      </SDKProvider>
    </Suspense>
  );
};

export default SettingsWrapper;
