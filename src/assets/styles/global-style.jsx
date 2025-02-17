import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${({ theme }) => (theme === "light" ? "#eeeeee" : "#222222")};
        transition: all 0.3s ease-in-out;
    }
    
        img {
        max-width: 100%;
        height: auto;
    }
    
    @media (max-width: 1024px) {
        body {
            font-size: 16px;
        }
    }

    @media (max-width: 768px) {
        body {
            font-size: 14px;
        }
    }
`;