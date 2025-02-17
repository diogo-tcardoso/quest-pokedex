import axios from 'axios';

export async function getPokemonIDs() {
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
        const pokemonList = response.data.results;

        const pokemonIDs = pokemonList.map(pokemon => {
            const urlParts = pokemon.url.split('/');
            return parseInt(urlParts[urlParts.length - 2]);
        });

        console.log(pokemonIDs);
        return pokemonIDs;

    } catch (error) {
        console.error(`Erro ao obter os IDs dos Pokémon: ${error.message}`);
        return [];
    }
}