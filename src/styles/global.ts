import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Montserrat', sans-serif;
        min-width: 320px;
        max-width: 100vw;
        min-height: 100vh;
        overflow-x: hidden;
    }
`;
export default GlobalStyle;