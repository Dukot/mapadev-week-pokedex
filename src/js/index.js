/*
quando clicar no pokemon da listagem temos ques esconder o cartão do pokemon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem.

pra isso vamos precisar trabalhar com dois elementos.
1-listagem
2-cartão pokemon

precisamos criar 2 variáveis no JS pra trabalhar com os elementos da tela.

vamos precisar trabalhar com evento de click feito pelo usuário na listagem de pokemons.

1-remover a classe aberto só do cartão que estiver aberto.
2-ao clicar em um pokemon da listagem pegamos o id desse pokemon para saber qual cartão mostrar.
3-remover a classe ativa que marca o pokemon selecionado.
4-adicionar a classe ativo no item da lista selecionado.
*/

// precisamos criar 2 variáveis no JS pra trabalhar com os elementos da tela.
const listaSelecaoPokemon = document.querySelectorAll('.pokemon')
const pokemonCard = document.querySelectorAll('.cartao-pokemon')


listaSelecaoPokemon.forEach(pokemon => {
    // vamos precisar trabalhar com evento de click feito pelo usuário na listagem de pokemons.
    pokemon.addEventListener('click', () => {
    // remover a classe aberto só do cartão que está aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
        
        // 2 -ao clicar em um pokemon da listagem pegamos o id desse pokemon para saber qual cartão mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' +  idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        // 3 -remover a classe ativa que marca o pokemon selecionado.
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        // 4-adicionar a classe ativo no item da lista selecionado.
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})