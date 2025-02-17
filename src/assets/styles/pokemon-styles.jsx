import styled from 'styled-components';

const typeColors = {
    grass: "#228b22",
    fire: "#fa1616",
    poison: "#cc16fa",
    water: "#166afa",
    bug: "#9acd32",
    normal: "#cbccca",
    electric: "#ffff33",
    ground: "#a0522d",
    fairy: "#fa5ada",
    psychic: "#9370db",
    fighting: "#f4a460",
    dragon: "#0205c2",
    rock: "#8b8b8b",
    ice: "#e8e8e8",
    ghost: '#6a5acd',
};

export const Container = styled.div`
    text-align: center;
`;

export const PokemonGrid = styled.ul`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
    list-style: none;
    padding: 0;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const PokemonCard = styled.li`
    text-align: center;
    align-items: center;
    border-radius: 20px;
    width: 90%;
    margin-left: 5px;
    padding: 8px;
    background-color: ${({ type }) => typeColors[type]};
    position: relative;
    box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.8);
    cursor: pointer;
    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
    
    @media (max-width: 1024px) {
        width: 90%;
        height: 240px;
    }
`;

export const PokemonID = styled.span`
    position: absolute;
    top: 5px;
    right: 10px;
    font-size: 14px;
    font-weight: bold;
    color: #000000;
    background-color: ${({ type }) => typeColors[type]};
    box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.8);
    padding: 3px 6px;
    border-radius: 10px;
    z-index: 10;
`;

export const PokemonImage = styled.img`
    width: 120px;
    height: 120px;
`;

export const PokemonName = styled.h3`
    margin: 10px 0;
    text-transform: uppercase;
`;

export const PokemonTypes = styled.p`
    border-radius: 5px;
    border: 2px solid #adadad;
    width: 70%;
    margin: 0 auto;
    font-size: 14px;
    box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.8);
`;