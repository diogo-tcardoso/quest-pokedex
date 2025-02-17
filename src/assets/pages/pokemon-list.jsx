import { useEffect, useState } from 'react';
import { getPokemonIDs } from '../../services/pokemon-id';
import { getPokemonInfo } from '../../services/pokemon-info';
import { Container, PokemonGrid, PokemonCard, PokemonImage, PokemonName, PokemonTypes, PokemonID } from '../styles/pokemon-styles';
import Button from '../../components/buttons/button';
import { Link } from 'react-router-dom';

function PokemonList() {
    const [pokemonData, setPokemonData] = useState([]);
    const [visibleCount, setVisibleCount] = useState(10);

    useEffect(() => {
        async function fetchPokemons() {
            const ids = await getPokemonIDs();
            const promises = ids.map(id => getPokemonInfo(id));
            const pokemonDetails = await Promise.all(promises);

            const formattedData = pokemonDetails.map(pokemon => ({
                id: pokemon.id,
                name: pokemon.name,
                image: pokemon.sprites.other.dream_world.front_default || '',
                types: pokemon.types.map(type => type.type.name)
            }));

            setPokemonData(formattedData);
        }

        fetchPokemons();
    }, []);

    const loadMorePokemons = () => {
        setVisibleCount(prevCount => prevCount + 10);
    };

    return (
        <Container>
            <PokemonGrid>
                {pokemonData.slice(0, visibleCount).map(pokemon => (
                    <Link key={pokemon.id} to={`/pokemon/${pokemon.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                    <PokemonCard type={pokemon.types[0]}>
                        <PokemonID>#{pokemon.id}</PokemonID>
                        <PokemonImage src={pokemon.image} alt={pokemon.name} />
                        <PokemonName>{pokemon.name}</PokemonName>
                        <PokemonTypes>Tipo: {pokemon.types.join(', ')}</PokemonTypes>
                    </PokemonCard>
                    </Link>
                ))}            </PokemonGrid>

            {visibleCount < pokemonData.length && (
                <Button onClick={loadMorePokemons} />
            )}
        </Container>
    );
}

export default PokemonList;