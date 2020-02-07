const path = require('path');

// your app's webpack config
const custom = require('../webpack.common.js');

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  webpackFinal: async config => {
    const rules = [...config.module.rules, ...custom.module.rules];

    config.resolve.extensions = custom.resolve.extensions;

    return { ...config, module: { ...config.module, rules } };
  }
};
