import { useEffect, useState } from 'react';
import { getPokemonIDs } from '../../services/pokemon-id';
import { getPokemonInfo } from '../../services/pokemon-info';
import { Container, PokemonGrid, PokemonCard, PokemonImage, PokemonName, PokemonTypes, PokemonID } from '../styles/pokemon-style';
import Button from '../../components/buttons/button';
import { Link } from 'react-router-dom';
import PokemonFilters from '../../components/theme-switch/pokemon-filter';

function PokemonList() {
    const [pokemonData, setPokemonData] = useState([]);
    const [filteredPokemons, setFilteredPokemons] = useState([]);
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
            setFilteredPokemons(formattedData);
        }

        fetchPokemons();
    }, []);

    const handleFilterChange = (searchTerm, selectedType) => {
        const filtered = pokemonData.filter((pokemon) => {
            const matchesSearch = pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesType = selectedType ? pokemon.types.includes(selectedType) : true;
            return matchesSearch && matchesType;
        });
        setFilteredPokemons(filtered);
    };

    const loadMorePokemons = () => {
        setVisibleCount(prevCount => prevCount + 10);
    };

    return (
        <Container>
            <PokemonFilters onFilterChange={handleFilterChange} />
            <PokemonGrid>
                {filteredPokemons.slice(0, visibleCount).map(pokemon => (
                    <Link key={pokemon.id} to={`/pokemon/${pokemon.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                        <PokemonCard type={pokemon.types[0]}>
                            <PokemonID>#{pokemon.id}</PokemonID>
                            <PokemonImage src={pokemon.image} alt={pokemon.name} />
                            <PokemonName>{pokemon.name}</PokemonName>
                            <PokemonTypes>Tipo: {pokemon.types.join(', ')}</PokemonTypes>
                        </PokemonCard>
                    </Link>
                ))}
            </PokemonGrid>

            {visibleCount < filteredPokemons.length && (
                <Button onClick={loadMorePokemons} />
            )}
        </Container>
    );
}

export default PokemonList;
