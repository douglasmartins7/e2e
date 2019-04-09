'use strict'
 
const nodeTestingServer = require('node-testing-server').nodeTestingServer;

module.exports.config = {
  useAllAngular2AppRoots: true,
  directConnect: true,
  // Set to "custom" instead of cucumber
  framework: 'custom',

  // Path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
        args: [
            // Disable "Chrome is being controlled by automated test software" infobar
            '--disable-infobars'
        ],
        prefs: {
            // Disable Chrome's annoying password manager
            'profile.password_manager_enabled': false,
            'credentials_enable_service': false,
            'password_manager_enabled': false
        }
    },
  },

  specs: [
    'specs/**/*.feature'
  ],

  //baseUrl: 'https://pokedex-angularjs.herokuapp.com',

  cucumberOpts: {
    // Require step definition files before executing features
    'require': [
        'step_definitions/**/*.js', // accepts a glob
        '../index.js',
        '../node_modules/protractor-cucumber-steps/index.js'
    ],
    // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output
    'format': 'node_modules/cucumber-pretty',
    'format-options': '{ "pretty": { "summary": true, "passed": true } }',
    // <string[]> (expression) only execute the features or scenarios with tags matching the expression
    'tags': ['@here'],
    // <boolean> fail if there are any undefined or pending steps
    'strict': true,
    // <boolean> invoke formatters without executing steps
    'dry-run': false,
    // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE
    'compiler': []
  },

  getPageTimeout: 10000,
  // Before performing any action, Protractor waits until there are no pending
  // asynchronous tasks in your Angular application
  allScriptsTimeout: 120000,

  // Custom parameters can be specified here
  params: {
      // Path to file with all page objects
      //pageObjects: require('./page_objects/index.js'),
      // Custom timeout to wait for elements on the page
      customTimeout: 5000,
      // Params for setting browser window width and height - can be also
      // changed via the command line as: --params.browserConfig.width 1024
      browserConfig: {
          width: 1280,
          height: 1024
      }
  },

  afterLaunch: function() {
    var reporter = require('cucumber-html-reporter');
  
    var options = {
          theme: 'bootstrap',
          jsonFile: 'results.json',
          output: 'e2e/tests_result/cucumber_report.html',
          reportSuiteAsScenarios: true,
          launchReport: true
      };
  
      reporter.generate(options);   
  },

  onPrepare() {
    // If you need to navigate to a page which does not use Angular,
    // you can turn off waiting for Angular
    browser.ignoreSynchronization = true;

    browser.manage().window().maximize();

    by.addLocator('dataTest',function(text) {
      return document.querySelector(`[data-test="${text}"]`)
    });

  }
};