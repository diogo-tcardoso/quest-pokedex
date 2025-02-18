import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { InputFilter, SelectFilter } from '../../assets/styles/pokemon-filter-style';

const PokemonFilters = ({ onFilterChange, searchTerm, selectedType }) => {
    const [search, setSearch] = useState(searchTerm);
    const [type, setType] = useState(selectedType);

    useEffect(() => {
        setSearch(searchTerm);
        setType(selectedType);
    }, [searchTerm, selectedType]);

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
        onFilterChange(event.target.value, type);
    };

    const handleTypeChange = (event) => {
        setType(event.target.value);
        onFilterChange(search, event.target.value);
    };

    return (
        <div>
            <InputFilter
                type="text"
                placeholder="Search Pokémon"
                value={search}
                onChange={handleSearchChange}
            />
            <SelectFilter value={type} onChange={handleTypeChange}>
                <option value="">All Types</option>
                <option value="bug">Bug</option>
                <option value="dragon">Dragon</option>
                <option value="electric">Electric</option>
                <option value="fairy">Fairy</option>
                <option value="flying">Flying</option>
                <option value="fighting">Fighting</option>
                <option value="fire">Fire</option>
                <option value="ghost">Ghost</option>
                <option value="grass">Grass</option>
                <option value="ground">Ground</option>
                <option value="ice">Ice</option>
                <option value="normal">Normal</option>
                <option value="psychic">Psychic</option>
                <option value="rock">Rock</option>
                <option value="steel">Steel</option>
                <option value="water">Water</option>
            </SelectFilter>
        </div>
    );
};

PokemonFilters.propTypes = {
    onFilterChange: PropTypes.func.isRequired,
    searchTerm: PropTypes.string.isRequired,
    selectedType: PropTypes.string.isRequired,
};

export default PokemonFilters;
