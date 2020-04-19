import path from 'path';
import fs from 'fs-extra';
import { getProjectArtifactId } from 'yoshi-helpers/build/utils';

export interface FlowBMConfig {
  moduleId: string;
  routeNamespace: string;
}

const configPath = 'yoshi-bm.config.json';

function readJson(jsonPath: string): Record<string, any> {
  return !fs.existsSync(jsonPath) ? {} : fs.readJSONSync(jsonPath);
}

export function readConfig(cwd = process.cwd()): FlowBMConfig {
  return {
    moduleId: getProjectArtifactId(cwd)!,
    routeNamespace: '',
    ...readJson(path.resolve(cwd, configPath)),
  };
}

export interface PageConfig {
  componentId: string;
}

export function readPageConfig(
  { moduleId }: FlowBMConfig,
  pagePath: string,
): PageConfig {
  const { dir, name } = path.parse(pagePath);

  return {
    componentId: `${moduleId}.pages.${path.parse(pagePath).name}`,
    ...readJson(path.join(dir, `${name}.config.json`)),
  };
}

export interface ExportedComponentConfig {
  componentId: string;
}

export function readExportedComponentConfig(
  { moduleId }: FlowBMConfig,
  componentPath: string,
): ExportedComponentConfig {
  const { dir, name } = path.parse(componentPath);

  return {
    componentId: `${moduleId}.components.${path.parse(componentPath).name}`,
    ...readJson(path.join(dir, `${name}.config.json`)),
  };
}

export interface MethodConfig {
  methodId: string;
}

export function readMethodConfig(
  { moduleId }: FlowBMConfig,
  methodPath: string,
): MethodConfig {
  const { dir, name } = path.parse(methodPath);

  return {
    methodId: `${moduleId}.methods.${path.parse(methodPath).name}`,
    ...readJson(path.join(dir, `${name}.config.json`)),
  };
}
