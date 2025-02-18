import styled from "styled-components";

export const SwitchContainer = styled.div`
    position: absolute;
    right: 0px;
    display: flex;
    align-items: center;
    justify-content: end;
    background-color: #142ef7;
    width: 500px;
    height: 100px;
    gap: 2px;
    cursor: pointer;

    @media (max-width: 1024px) {
        width: 250px;
        height: 65px;
    }

    @media (max-width: 768px) {
        width: 150px;
        height: 44px;
    }
`;

export const Switch = styled.div`
    width: 50px;
    height: 25px;
    background-color: ${({ theme }) => (theme === "light" ? "#ddd" : "#292929")};
    border-radius: 20px;
    display: flex;
    align-items: center;
    padding: 3px;
    transition: background 0.3s ease-in-out;

    @media (max-width: 768px) {
        width: 40px;
        height: 18px;
    }
`;

export const Toggle = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${({ theme }) => (theme === "light" ? "#ffdd00" : "#ccc")};
    border-radius: 50%;
    transform: ${({ theme }) => (theme === "light" ? "translateX(0)" : "translateX(25px)")};
    transition: transform 0.3s ease-in-out, background 0.3s ease-in-out;

    @media (max-width: 768px) {
        width: 16px;
        height: 16px;
    }
`;