const editorFlowConfig = require('./defaults/editor-flow');
const loadJestYoshiConfig = require('yoshi-config/build/jest').default;

// We want to remove jest-yoshi-config usage from user's side, but we don't want to break current projects.
// The idea is to handle it here and load correct jest config using this function from all jest configuration files.
const loadJestConfig = () => {
  if (editorFlowConfig.shouldUse()) {
    return editorFlowConfig.getJestConfig();
  } else {
    return loadJestYoshiConfig();
  }
};

const loadYoshiConfig = () => {
  if (editorFlowConfig.shouldUse()) {
    return editorFlowConfig.getYoshiConfig();
  } else {
    return require('yoshi-config');
  }
};

module.exports = {
  loadJestConfig,
  loadYoshiConfig,
};
