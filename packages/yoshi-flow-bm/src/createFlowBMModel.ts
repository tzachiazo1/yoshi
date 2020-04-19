import path from 'path';
import globby from 'globby';
import { watch } from 'chokidar';
import {
  readConfig,
  readExportedComponentConfig,
  readMethodConfig,
  readPageConfig,
} from './config';

export interface ExportedComponentModel {
  componentId: string;
  componentPath: string;
}
export interface PageModel extends ExportedComponentModel {
  route: string;
}
export interface MethodModel {
  methodId: string;
  methodPath: string;
}

export interface FlowBMModel {
  moduleId: string;
  pages: Array<PageModel>;
  exportedComponents: Array<ExportedComponentModel>;
  methods: Array<MethodModel>;
  moduleInitPath?: string;
  localePath: string;
}

const exts = '{js,jsx,ts,tsx}';
const pagesDir = 'src/pages';
const pagesPattern = `${pagesDir}/**/*.${exts}`;
const componentsPattern = `src/exported-components/**/*.${exts}`;
const methodsPattern = `src/methods/**/*.${exts}`;
const moduleInitPattern = `src/moduleInit.${exts}`;
const translationsDir = 'translations';

export default function createFlowBMModel(cwd = process.cwd()): FlowBMModel {
  const globFiles = (pattern: string) =>
    globby.sync(pattern, { cwd, absolute: true, onlyFiles: true });

  const globDirs = (pattern: string) =>
    globby.sync(pattern, {
      cwd,
      absolute: true,
      onlyDirectories: true,
      expandDirectories: false,
    });

  const config = readConfig(cwd);

  const getPageModel = (pagePath: string): PageModel => {
    const { name } = path.parse(pagePath);

    return {
      ...readPageConfig(config, pagePath),
      componentPath: pagePath,
      route: path.join(
        config.routeNamespace,
        ...path
          .relative(pagesDir, pagePath)
          .split(path.delimiter)
          .slice(0, -1),
        name !== 'index' ? name : '',
      ),
    };
  };

  const getExportedComponentModel = (
    componentPath: string,
  ): ExportedComponentModel => ({
    ...readExportedComponentConfig(config, componentPath),
    componentPath,
  });

  const getMethodModel = (methodPath: string): MethodModel => ({
    ...readMethodConfig(config, methodPath),
    methodPath,
  });

  const pagesDir = path.join(cwd, 'src/pages');

  const pages = globFiles(pagesPattern).map(getPageModel);

  const exportedComponents = globFiles(componentsPattern).map(
    getExportedComponentModel,
  );

  const methods = globFiles(methodsPattern).map(getMethodModel);

  const [moduleInitPath] = globFiles(moduleInitPattern);
  const [localePath] = globDirs(translationsDir);

  return {
    moduleId: config.moduleId,
    pages,
    exportedComponents,
    methods,
    localePath,
    moduleInitPath,
  };
}

export function watchFlowBMModel(
  handler: (model: FlowBMModel) => void,
  cwd = process.cwd(),
) {
  const watcher = watch(
    [
      pagesPattern,
      componentsPattern,
      methodsPattern,
      moduleInitPattern,
      translationsDir,
    ],
    {
      cwd,
    },
  );

  watcher.on('all', () => handler(createFlowBMModel(cwd)));
}
