import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @font-face {
        font-family: "Montserrat";
        src: url("url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap')");
    }
    :root {
        --clr-primary: rgb(238, 119, 17);
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: "Montserrat", sans-serif;
        min-width: 320px;
        max-width: 100vw;
        min-height: 100vh;
        overflow-x: hidden;
    }
`;
