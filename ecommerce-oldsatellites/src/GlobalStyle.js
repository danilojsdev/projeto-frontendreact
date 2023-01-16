import { createGlobalStyle } from "styled-components";
import backgroundImage from "./assets/Espaço.jpg"

export const GlobalStyle = createGlobalStyle`
    body {
        background-image: url(${backgroundImage});
        background-position: center;
        background-size: cover;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;