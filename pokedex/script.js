const pokeContainer = document.querySelector('#poke-container');
const pokemon_count = 151;
const colors = {
    fire: '#f07c65',
    grass: '#00FF7F',
    electric: '#f7d22a',
    water: '#7db1ff',
    ground: '#ffbc7d',
    rock: '#8f7761',
    fairy: '#fceaff',
    poison: '#c485d4',
    bug: '#c1d485',
    dragon: '#6495ED',
    psychic: '#DA70D6',
    flying: '#e6d3d7',
    fighting: '#f78d2a',
    normal: '#F5F5F5'
}

const fetchPokemon = async () => {
    for (let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i);
    }
}

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    cratePokemonCard(data);
}

const cratePokemonCard = (pokemon) => {
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');

    const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    const id = pokemon.id.toString().padStart(3, '0');

    const type1 = pokemon.types[0].type.name;
    let type2 = pokemon.types[1] ? pokemon.types[1].type.name : '';

    const type = type2 ? `${type1} / ${type2}` : type1;

    const bgColor1 = colors[type1];
    const bgColor2 = type2 ? colors[type2] : bgColor1;

    pokemonEl.style.background = `linear-gradient(to bottom right, ${bgColor1} 50%, ${bgColor2} 50%)`;


    const pokemonInnerHTML = `
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="">
      <div class="info">
        <span class="number">#${id}</span>
        <h3>${name}</h3>
        <small class="type">Type: <span>${type}</span ></small>
      </div >
    `
    pokemonEl.innerHTML = pokemonInnerHTML;

    pokeContainer.append(pokemonEl);
}

fetchPokemon();