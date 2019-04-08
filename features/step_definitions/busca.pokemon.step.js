"use strict";

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
//const ListagemPage = require('../../pages/listagem.po.js');
chai.use(chaiAsPromised);
const expect = chai.expect;

let {defineSupportCode} = require('cucumber');

defineSupportCode(({Given, When, Then}) => {

    Given('que eu estou na tela de listagem de pokémons', function () {
        browser.sleep(100000);
        browser.get("https://pokedex-angularjs.herokuapp.com");
        browser.sleep(100000);
    });

    When('eu digito {string} no campo de pesquisa', function (string) {
        // Write code here that turns the phrase above into concrete actions
        //return 'pending';
    });

    Then('devo visualizar dois pokémons no resultado', function () {
        // Write code here that turns the phrase above into concrete actions
        //return 'pending';
    });

   
});
