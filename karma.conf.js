var path = require('path');
var webpackConfig = require('./webpack.config.js');
var ROOT_PATH = path.resolve(__dirname, '.');

module.exports = function(config) {
  config.set({
    basePath: ROOT_PATH,
    webpack: webpackConfig,
    frameworks: ['jasmine'],
    files: [
      'test/**/*.spec.js',
      // { pattern: 'spec/fixtures/**/*.json', included: false, served: true },
    ],
    preprocessors: {
      'test/**/*.spec.js': ['webpack'],
      'src/**/*.js': ['webpack']
    },
    browsers: ['Chrome'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false,
    concurrency: Infinity,

    webpackMiddleware: { stats: 'errors-only' },
  });
};
