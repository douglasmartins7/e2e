'use strict'
 
const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

module.exports.config = {

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  directConnect: true,

  capabilities: {
    'browserName': 'chrome',
  },
  specs: [
    '../features/specs/*.feature'
  ],

  baseUrl: 'https://pokedex-angularjs.herokuapp.com',

  cucumberOpts: {
          require: 'features/step_definitions/*.step.js',
          tags: false,
          format: 'node_modules/cucumber-pretty',
          profile: false,
          'no-source': true,
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
    browser.manage().window().maximize();

    by.addLocator('dataTest',function(text) {
      return document.querySelector(`[data-test="${text}"]`)
    });

  }
};