import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`    
    *, *::after, *::before {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    *::selection {
        color: ${({ theme }) => theme.light};
        background-color: ${({ theme }) => theme.dark};
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: 'Work Sans', sans-serif;
        background: ${({ theme }) => theme.light};
        color: ${({ theme }) => theme.dark};
    }
`

export default GlobalStyle;