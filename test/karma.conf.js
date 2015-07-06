// Karma configuration
module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: [
      "jasmine"
    ],

    // list of files / patterns to load in the browser
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-sanitize/angular-sanitize.min.js',
      'bower_components/angular-resource/angular-resource.min.js',
      'bower_components/angular-touch/angular-touch.min.js',
      'bower_components/angular-cookies/angular-cookies.min.js',
      'bower_components/angular-animate/angular-animate.min.js',
      'app/scripts/*.js',
      'app/scripts/controllers/*.js',
      'test/unit/*.js',
    ],

    // list of files / patterns to exclude
    exclude: [
    ],

    // web server port
    port: 9999,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      "PhantomJS",
      // For Chrome browser testing, enable the following two lines but change the chrome path or use set_chromebin option.
      //"/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome",
      //'Chrome_without_security',
    ],


    // Custom flags.
    customLaunchers: {
      Chrome_without_security: {
        base: 'Chrome',
        flags: ['--disable-web-security']
      }
    },

    // Which plugins to enable
    plugins: [
      "karma-phantomjs-launcher",
      "karma-jasmine",
      //"karma-chrome-launcher",
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,
  });
};
