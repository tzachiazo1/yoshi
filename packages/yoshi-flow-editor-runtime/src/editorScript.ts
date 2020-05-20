import { EditorReadyFn as PlatformEditorReadyFn } from '@wix/platform-editor-sdk';
import { SentryConfig, ExperimentsConfig } from './constants';
import { EditorReadyFn } from './types';
import { EditorScriptFlowAPI } from './FlowAPI';

export const editorReadyWrapper = (
  editorReady: EditorReadyFn,
  sentry: SentryConfig | null,
  experimentsConfig: ExperimentsConfig | null,
  artifactId: string,
): PlatformEditorReadyFn => (editorSDK, appDefinitionId, platformOptions) => {
  const flowAPI = new EditorScriptFlowAPI({
    experimentsConfig,
    platformOptions,
    sentry,
    artifactId,
  });
  return editorReady(editorSDK, appDefinitionId, platformOptions, flowAPI);
};
