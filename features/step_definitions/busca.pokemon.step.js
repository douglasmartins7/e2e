"use strict";

const { defineSupportCode } = require('cucumber');

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

defineSupportCode(function ({ Given, When, Then }) {
    
    var url = 'https://www.google.com/'

    Given('que eu estou na tela de listagem de pokémons', function () {
        browser.get(url).then(function () {
            browser.sleep(50000);
            element(by.css("a[id='fsettl']")).click();
            //acessa o chrome mais não interage com o IU    
        });
    });

    When('digito algo', function () {
        
    });

    Then('acesso tela com opções de sites', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
    });


   
});
