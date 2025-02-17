import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { PokemonBox, MovesContainer, Move, PokemonImage, AbilitiesContainer, Ability, PokeName } from '../styles/pokemon-details-style';
import { BackButton } from '../styles/return-button-style';

function PokemonDetails() {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [abilities, setAbilities] = useState([]);

    useEffect(() => {
        async function fetchPokemonDetails() {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
                setPokemon(response.data);

                const abilityPromises = response.data.abilities.map(async (item) => {
                    const abilityResponse = await axios.get(item.ability.url);
                    return {
                        name: item.ability.name,
                        description: abilityResponse.data.flavor_text_entries.find(entry => entry.language.name === "en")?.flavor_text || "No description available."
                    };
                });

                const abilitiesData = await Promise.all(abilityPromises);
                setAbilities(abilitiesData);

            } catch (error) {
                console.error("Erro ao carregar Pokémon", error);
            }
        }

        fetchPokemonDetails();
    }, [id]);

    if (!pokemon) return <h2>Carregando...</h2>;

    return (
        <PokemonBox>

            <BackButton to="/">
                <span>⬅️</span> Voltar
            </BackButton>

            <PokemonImage src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />

            <PokeName>{pokemon.name}</PokeName>
            <p><strong>ID:</strong> #{pokemon.id}</p>

            <p><strong>Tipo: </strong>{pokemon.types.map(type => type.type.name).join(', ')}</p>

            <h3>Moves:</h3>
            <MovesContainer>
                {pokemon.moves.slice(0, 10).map((move, index) => (
                <Move key={index}>{move.move.name}</Move>
                ))}
            </MovesContainer>

            <h3>Abilities:</h3>
            <AbilitiesContainer>
                {abilities.map((ability, index) => (
                <Ability key={index}>
                    <strong>{ability.name}:</strong> {ability.description}
                </Ability>
                ))}
            </AbilitiesContainer>
        </PokemonBox>
    );
}

export default PokemonDetails;