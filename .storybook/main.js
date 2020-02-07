const path = require('path');

// your app's webpack config
const custom = require('../webpack.common.js');

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  webpackFinal: async config => {
    // Disable file-loader for SVG
    const fileLoaderRule = config.module.rules.find(rule =>
      rule.test.test('.svg')
    );
    fileLoaderRule.exclude = /\.svg$/;

    const rules = [...custom.module.rules, ...config.module.rules];

    config.resolve.extensions = [...custom.resolve.extensions];

    return { ...config, module: { ...config.module, rules } };
  }
};
