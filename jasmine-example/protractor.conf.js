'use strict'
 
const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
module.exports.config = {
  directConnect: true,
  capabilities: {
    'browserName': 'chrome',
  },
  specs: ['specs/*.spec.js'],
  baseUrl: 'https://pokedex-angularjs.herokuapp.com',
  onPrepare() {
    jasmine.getEnv().addReporter(new SpecReporter({
      displayFailuresSummary: true,
      displayFailedSpec: true,
      displaySuiteNumber: true,
      displaySpecDuration: true
    }));
  }
};