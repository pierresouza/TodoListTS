import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body{
    
    height: 100vh;
    width: 100vw;
    display: flex;
    padding-top: 2.5rem;
    justify-content: center;
}
`;
