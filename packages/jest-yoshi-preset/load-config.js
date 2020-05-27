const loadJestYoshiConfig = require('yoshi-config/build/jest').default;
const yoshiConfig = require('yoshi-config');
const editorFlowConfig = require('./defaults/editor-flow');

// We want to remove jest-yoshi-config usage from user's side, but we don't want to break current projects.
// The idea is to handle it here and load correct jest config using this function from all jest configuration files.
const loadJestConfig = () => {
  if (editorFlowConfig.shouldUse()) {
    return editorFlowConfig.jestConfig;
  } else {
    return loadJestYoshiConfig();
  }
};

const loadYoshiConfig = () => {
  if (editorFlowConfig.shouldUse()) {
    return editorFlowConfig.yoshiConfig;
  } else {
    return yoshiConfig;
  }
};

module.exports = {
  loadJestConfig,
  loadYoshiConfig,
};
