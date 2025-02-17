import styled from "styled-components";

export const PokemonBox = styled.div`
    background: rgba(255, 255, 255, 0.9);
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    max-width: 800px;
    width: 100%;
    height: 470px;
    margin: 0 auto;
    text-align: center;
    position: relative;

    @media (max-width: 1024px) {
        padding: 15px;
    }

    @media (max-width: 768px) {
        max-width: 90%;
        padding: 10px;
    }

    @media (max-width: 480px) {
        max-width: 90%;
        padding: 8px;
        height: 600px;
    }
`;

export const PokemonImage = styled.img`
    position: absolute;
    top: 15px;
    right: -40px;
    width: 35%;
    height: 35%;

    @media (max-width: 1024px) {
        width: 30%;
        height: 30%;
        rigth: 20px;
    }

    @media (max-width: 768px) {
        width: 30%;
        height: 30%;
        rigth: 20px;
    }

    @media (max-width: 480px) {
        width: 30%;
        height: 30%;
        margin-right: 35px;
    }
`;

export const PokeName = styled.h2`
    text-transform: uppercase;
    margin-top: -40px;

    @media (max-width: 480px) {
        margin-top: 30px;
    }
`;

export const MovesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;

    @media (max-width: 480px) {
        gap: 5px;
    }
`;

export const Move = styled.span`
    background: white;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
    font-size: 17px;
    font-weight: bold;
`;

export const AbilitiesContainer = styled.div`
    margin-top: 15px;
    text-align: left;
    background: #f5f5f5;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);

    @media (max-width: 1024px) {
        padding: 15px;
    }

    @media (max-width: 768px) {
        width: 90%;
        margin: 20px auto;
        padding: 10px;
    }
`;

export const Ability = styled.p`
    font-size: 14px;
    margin: 5px 0;
    padding: 5px;
    border-left: 5px solid #ffcc00;
`;