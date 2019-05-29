const babelConfig = require('@istanbuljs/nyc-config-babel');
const hookRunInThisContextConfig = require('@istanbuljs/nyc-config-hook-run-in-this-context');

module.exports = {
  ...babelConfig,
  ...hookRunInThisContextConfig,
  all: true,
  sourceMap: false,
  instrument: false,
  'check-coverage': true
  reporter: [
    'lcov',
    'text-summary'
  ],
  include: [
    'src/**/*.js'
  ],
  exclude: [
    '_temp/**',
    'doc/**',
    'out/**',
    'node_modules/**',
    'script/**',
    'src/**/template/**',
    'test/**'
  ],
  require: [
    '@babel/register'
  ],
};
