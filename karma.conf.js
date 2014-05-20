// Karma configuration
module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: [
      'requirejs',
      'qunit',
      'sinon'
    ],
    files: [
      {
        pattern: 'test/vendor/jquery-2.1/dist/jquery.js',
        included: false
      },
      {
        pattern: 'src/**/*.js',
        included: false
      },
      {
        pattern: 'test/*.config.js',
        included: false
      },
      {
        pattern: 'test/integration/*test.js',
        included: false
      },
      'test/integration/*.config.js'
    ],
    exclude: [
      'karma.conf.js'
    ],
    reporters: [
      'dots',
      'coverage'
    ],
    preprocessors: {
      'src/**/*.js': 'coverage'
    },
    coverageReporter: {
      type: 'text',
      dir: 'test/coverage/'
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: [
      'PhantomJS'
    ],
    autoWatch: false,
    singleRun: true
  });
  // config.set({
  //   basePath: '',
  //   frameworks: [
  //     'qunit',
  //     'sinon'
  //   ],
  //   files: [
  //     'test/vendor/jquery-2.1/dist/jquery.js',
  //     'test/*.config.js',
  //     'src/**/*.js',
  //     'test/unit/**/*test.js'
  //   ],
  //   exclude: [
  //     'karma.conf.js'
  //   ],
  //   reporters: [
  //     'dots',
  //     'coverage'
  //   ],
  //   preprocessors: {
  //     'src/**/*.js': 'coverage'
  //   },
  //   coverageReporter: {
  //     type: 'text',
  //     dir: 'test/coverage/'
  //   },
  //   port: 9876,
  //   colors: true,
  //   logLevel: config.LOG_INFO,
  //   browsers: [
  //     'PhantomJS'
  //   ],
  //   autoWatch: false,
  //   singleRun: true
  // });
};
