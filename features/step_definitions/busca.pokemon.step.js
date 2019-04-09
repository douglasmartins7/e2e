"use strict";

const { defineSupportCode } = require('cucumber');

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

defineSupportCode(function ({ Given, When, Then }) {
    
    var url = 'https://www.google.com/'

    Given('que eu estou na tela de listagem de pokémons', function () {
        browser.get(url).then(function () {
            //alert("Agora vai")
        });
      });
   
});
