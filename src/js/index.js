/*  
Quando clicar no pokémon da listagem temos que esconder o cartao 
do pokémon aberto e mostar o cartão correspondente ao que foi selecionado 
na listagem 

Pra isso vamos precissar trabalhar com dois elementos 
1 - listagem 
2 - cartão pokémon 

Precisamos criar as variáveis no JS 
para trabalhar com os elementos da tela 

vamos precisar trabalhar com evento de clique
feito pelo usuário na listagem de pokémons

- remover a classe aberto só do cartão que está aberto 
- ao clicar em pókemon da listagem pegamos o id desse pókemon
pra saber qual cartão monstar 
- remover a classe ativa que marca o pókemon selecionado
- adicionar a classe ativo no item da lista selecionado 
*/

const listaSelecaoPokemons = document.querySelectorAll(".pokemon");
const pokemonsCard = document.querySelectorAll(".cartao-pokemon");

listaSelecaoPokemons.forEach((pokemon) => {
  pokemon.addEventListener("click", () => {
    const cartaoPokemonAberto = document.querySelector(".aberto");
    cartaoPokemonAberto.classList.remove("aberto");

    const idPokemonSelecionado = pokemon.attributes.id.value;

    const idDoCartaoPokemonParaAbrir = "cartao-" + idPokemonSelecionado;
    const cartaoPokemonParaAbrir = document.getElementById(
      idDoCartaoPokemonParaAbrir
    );
    cartaoPokemonParaAbrir.classList.add("aberto");

    const pokemonAtivoNaListagem = document.querySelector(".ativo");
    pokemonAtivoNaListagem.classList.remove("ativo");

    const pokemonSelecionadoNaListagem =
      document.getElementById(idPokemonSelecionado);
    pokemonSelecionadoNaListagem.classList.add("ativo");
  });
});
