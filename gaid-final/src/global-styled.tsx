import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: 0;
        
    }
    #root{
        width: 100vw;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
`
export default GlobalStyle