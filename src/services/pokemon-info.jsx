import axios from 'axios';

export async function getPokemonInfo(id) {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return response.data;
        
    } catch (error) {
        console.error(`Erro ao obter informações do Pokémon ${id}: ${error.message}`);
        return null;
    }
}