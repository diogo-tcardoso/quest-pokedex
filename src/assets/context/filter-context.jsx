import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedType, setSelectedType] = useState("");

    const updateFilters = (search, type) => {
        setSearchTerm(search);
        setSelectedType(type);
    };

    return (
        <FilterContext.Provider value={{ searchTerm, selectedType, updateFilters }}>
            {children}
        </FilterContext.Provider>
    );
};

FilterProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useFilter = () => {
    return useContext(FilterContext);
};
