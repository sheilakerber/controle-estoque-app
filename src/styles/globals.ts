import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 :root {     // cores globais
     --background: #FFFFFF;
     --lightPurple: #FAF5FD;
     --darkPurple: #560074;
     --textPurple: #6A0384;
 }

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;   
}

html {
    font-family: 'Sunflower', sans-serif;
    
    @media (max-width: 1080px){
        font-size: 93.75%;  // 16px
    }

    @media (max-width: 720px){
        font-size: 87.5%;   // 14px
    }
}

body {
    background: var(---background);
    -webkit-font-smoothing: antialiased;
}

h1 {
        color: var(--darkPurple);
    }

button {
    cursor: pointer;
}

[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
}


`