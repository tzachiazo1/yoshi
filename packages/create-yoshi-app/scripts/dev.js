process.on('unhandledRejection', (error) => {
  throw error;
});

process.env.EXPERIMENTAL_FLOW_BM = 'true';
process.env.EXPERIMENTAL_PLATFORM_TEMPLATE = 'true';
process.env.EXPERIMENTAL_FLOW_LIBRARY = 'true';

const fs = require('fs-extra');
const path = require('path');
const tempy = require('tempy');
const chalk = require('chalk');
const map = require('lodash/map');
const reverse = require('lodash/reverse');
const sortBy = require('lodash/sortBy');
const prompts = require('prompts');
const chokidar = require('chokidar');
const clipboardy = require('clipboardy');
const {
  getValuesMap,
  getTemplateScopes,
  processFileWithScope,
} = require('../src/index');
const { appCacheKey } = require('../src/constants');
const cache = require('./cache')(appCacheKey);
const TemplateModel = require('../src/TemplateModel').default;
const createApp = require('../src/createApp').default;
const { clearConsole } = require('../src/utils');
const {
  symlinkModules,
  getYoshiModulesList,
} = require('../../../scripts/utils/symlinkModules');
const installExternalDependencies = require('../src/installExternalDependnecies')
  .default;

function startWatcher(workingDir, templateModel) {
  const templatePath = templateModel.getPath();

  console.log(`Watching ${chalk.magenta(templatePath)} for changes...`);
  console.log();

  const watcher = chokidar.watch('.', {
    ignored: 'node_modules',
    persistent: true,
    ignoreInitial: true,
    cwd: templatePath,
  });

  const valuesMap = getValuesMap(templateModel);

  const generateFile = (relativePath) => {
    const fullPath = path.join(templatePath, relativePath);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');
    const destinationPath = path.join(workingDir, relativePath);
    const scopes = getTemplateScopes(fullPath, valuesMap);

    scopes.forEach((loopScope) => {
      const transformed = processFileWithScope(
        destinationPath,
        fileContents,
        {
          ...valuesMap,
          ...loopScope,
        },
        {
          graceful: true,
        },
      );

      console.log(
        `${path.join(
          path.basename(templatePath),
          relativePath,
        )} ${chalk.magenta('->')} ${chalk.cyan(transformed.path)}`,
      );
    });
  };

  watcher.on('change', (relativePath) => {
    generateFile(relativePath);
  });

  watcher.on('add', (relativePath) => {
    generateFile(relativePath);
  });

  watcher.on('unlink', (relativePath) => {
    const destinationPath = path.join(workingDir, relativePath);
    fs.removeSync(destinationPath);
    console.log(chalk.red('removed ') + chalk.cyan(destinationPath));
  });
}

async function askShouldContinueFromCache(cachedProjects) {
  const abortConstant = '__new_project__';
  let canceled;

  const projectsChoices = reverse(
    sortBy(
      map(cachedProjects, (value, title) => {
        const lastModified = new Date(value.lastModified);

        return {
          title: `${title}${chalk.dim.italic(
            ` (${lastModified.toLocaleString()})`,
          )}`,
          value,
        };
      }),
      'value.lastModified',
    ),
  );

  clearConsole();

  const response = await prompts(
    {
      type: 'select',
      name: 'value',
      message: `You can choose to continue an old session or start a new one`,
      choices: [
        { title: 'I want to start a new session', value: abortConstant },
        ...projectsChoices,
      ],
    },
    {
      onCancel: () => {
        canceled = true;
      },
    },
  );

  if (response.value === abortConstant || canceled) {
    return false;
  }

  response.value.templateModel = new TemplateModel(
    response.value.templateModel,
  );

  return response.value;
}

function upsertProjectInCache(templateModel, workingDir) {
  const templateCacheObj = {
    [templateModel.getTitle()]: {
      templateModel,
      workingDir,
      lastModified: Date.now(),
    },
  };

  if (!cache.has()) {
    cache.set(templateCacheObj);
  } else {
    const cachedTemplates = cache.get();

    cache.set({ ...cachedTemplates, ...templateCacheObj });
  }
}

async function init() {
  let templateModel;
  let workingDir;
  let chosenProject;

  if (cache.has()) {
    const cachedProjects = cache.get();

    chosenProject = await askShouldContinueFromCache(cachedProjects);
  }

  if (!!chosenProject) {
    // using a project from cache
    workingDir = chosenProject.workingDir;
    templateModel = chosenProject.templateModel;

    await createApp({
      workingDir,
      templateModel,
      commit: false,
      install: false,
      lint: false,
    });
  } else {
    // first time generation
    workingDir = path.join(
      tempy.directory(),
      process.env.DEV_ARTIFACT_ID || 'generated',
    );

    templateModel = await createApp({
      workingDir,
      install: false,
      commit: true,
      lint: false,
    });

    const yoshiModulesList = getYoshiModulesList();

    installExternalDependencies(workingDir, yoshiModulesList);
  }

  // symlink yoshi's packages
  symlinkModules(workingDir);

  upsertProjectInCache(templateModel, workingDir);

  clipboardy.writeSync(workingDir);

  console.log('> ', 'Generated a project: ', chalk.yellowBright(workingDir));
  console.log(
    '> ',
    chalk.cyan('Project directory path has copied to clipboard 📋'),
  );
  console.log();

  startWatcher(workingDir, templateModel);
}

init();
