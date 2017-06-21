const workboxPlugin = require('workbox-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  webpack: config => {
    config.plugins.push(
      // new workboxPlugin({
      //   swSrc: 'sw.js'
      // })
      new CopyWebpackPlugin([
        // {output}/file.txt
        { from: 'sw.js' },
        { from: 'workbox.js' }
      ])
    );

    return config;
  }
};
