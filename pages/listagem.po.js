/*aqui fica a page object
que servem para encapsular cada página acessada dentro de uma classe para definirmos atributos e 
métodos, seguindo o conceito de orientação a objetos.
*/

'use strict'
 
class ListagemPage{
 constructor(){
   this.filtro = element(by.model('PokemonsController.filtro'));
   this.resultados = element.all(by.repeater('item in PokemonsController.pokemons'));
 }
 
 visit(){
   return browser.get('/#!/list');
 }
}
module.exports = ListagemPage;


