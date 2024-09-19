import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
    }

    #root{
        width: 100vw;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

`
export default GlobalStyle