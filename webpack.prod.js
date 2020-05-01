const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  output: {
    publicPath: '/watchlist/'
  },
  plugins: [
    new webpack.DefinePlugin({
      BASENAME: JSON.stringify('/watchlist/')
    })
  ]
});
