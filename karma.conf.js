// Karma configuration
// Generated on Wed Jul 27 2016 19:25:53 GMT-0600 (Mountain Daylight Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'requirejs'],

    plugins: [
        'karma-chrome-launcher',
        'karma-jasmine',
        'karma-requirejs',
        'karma-jasmine-html-reporter',
        'karma-html-reporter'
        
    ],

    // list of files / patterns to load in the browser
    files: [
        './node_modules/karma-requirejs/lib/adapter.js',
        './app/bower_components/jquery/dist/jquery.min.js',
        './node_modules/requirejs/require.js',
        
        './node_modules/jasmine-core/lib/jasmine-core/jasmine.css',
        './node_modules/jasmine-core/lib/jasmine-core/jasmine.js',
        './node_modules/jasmine-core/lib/jasmine-core/jasmine-html.js',
        'test-main.js',
        './node_modules/karma-jasmine-html-reporter/src/lib/adapter.js',
        
        './app/bower_components/bootstrap/dist/js/bootstrap.min.js',
        './app/bower_components/angular/angular.min.js',
        './node_modules/angular-mocks/angular-mocks.js',
        './app/bower_components/angular-route/angular-route.min.js',
        './app/bower_components/angular-animate/angular-animate.min.js',
        './app/js/cc-app.js',
        './app/js/cc-app-lib.js',
        './app/countries/countries.js',
        './app/countryDetail/countryDetail.js',

        {pattern: './app/**/*Spec.js', included: false}
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {

    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['html',],

    htmlReporter: {
      outputDir: 'karma_html', // where to put the reports 
      templatePath: null, // set if you moved jasmine_template.html
      focusOnFailures: true, // reports show failures on start
      namedFiles: false, // name files instead of creating sub-directories
      pageTitle: null, // page title for reports; browser info by default
      urlFriendlyName: false, // simply replaces spaces with _ for files/dirs
      reportName: 'report-summary-filename', // report summary filename; browser info by default
      
      
      // experimental
      preserveDescribeNesting: false, // folded suites stay folded 
      foldAll: false, // reports start folded (only with preserveDescribeNesting)
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
