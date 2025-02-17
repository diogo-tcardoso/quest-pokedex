import styled from "styled-components";

const ButtonStyle = styled.button`
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    transition: background-color 0.3s;
    &:hover {
        background-color: #0069d9;
    }
`;

export { ButtonStyle };