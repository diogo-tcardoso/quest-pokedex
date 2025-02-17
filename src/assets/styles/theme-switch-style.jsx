import styled from "styled-components";

export const SwitchContainer = styled.div`
    position: absolute;
    top: 10px;
    right: 20px;
    display: flex;
    align-items: center;
    gap: 2px;
    cursor: pointer;

    @media (max-width: 768px) {
        right: 10px;
        top: 5px;
    }
`;

export const Switch = styled.div`
    width: 50px;
    height: 25px;
    background-color: ${({ theme }) => (theme === "light" ? "#ddd" : "#444")};
    border-radius: 20px;
    display: flex;
    align-items: center;
    padding: 3px;
    transition: background 0.3s ease-in-out;
`;

export const Toggle = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${({ theme }) => (theme === "light" ? "#ffdd00" : "#ccc")};
    border-radius: 50%;
    transform: ${({ theme }) => (theme === "light" ? "translateX(0)" : "translateX(25px)")};
    transition: transform 0.3s ease-in-out, background 0.3s ease-in-out;
`;