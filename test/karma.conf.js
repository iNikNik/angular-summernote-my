// Karma configuration
// Generated on Sat Jan 04 2014 16:46:43 GMT+0900 (KST)

var sharedConfig = require('./karma-shared.conf');

module.exports = function(config) {
  'use strict';
  sharedConfig(config, {testName: 'angular-summernote: angular-1.3.x'});

  config.set({
    // list of files / patterns to load in the browser
    files: [
      // dependencies
      '../examples/components/jquery/dist/jquery.js',
      '../examples/components/bootstrap/dist/js/bootstrap.min.js',
      '../examples/components/summernote/dist/summernote.min.js',
      '../examples/components/angular/angular.min.js',

      // application code
      '../src/**/*.js',

      // test dependencies
      '../examples/components/angular-mocks/angular-mocks.js',
      '../examples/components/chai/chai.js',
      'mocha.conf.js',
      'chai.conf.js',

      // test code
      '*.test.js'
    ]
  });
};
