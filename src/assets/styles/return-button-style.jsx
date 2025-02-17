import styled from "styled-components";
import { Link } from "react-router-dom";

export const BackButton = styled(Link)`
    display: flex;
    align-items: center;
    gap: 8px;
    background: #ffcc00;
    color: black;
    width: 85px;
    text-decoration: none;
    padding: 10px 15px;
    border-radius: 10px;
    font-weight: bold;
    margin-top: 15px;
    transition: 0.3s;

    &:hover {
        background: #e6b800;
    }
`;