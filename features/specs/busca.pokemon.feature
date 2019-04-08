#language: pt

Funcionalidade: Busca de pokémons

Cenário: Pesquisa de pelo nome do pokémon
    Dado que eu estou na tela de listagem de pokémons
    Quando eu digito "mew" no campo de pesquisa
    Então devo visualizar dois pokémons no resultado