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

// estilos globais do modal
.react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
}

.react-modal-content{
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.24rem;
}

.react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.5);
    }
}

.mainContent {
    display: flex;  
    align-items: center;
    justify-content: space-around;
    padding: 1rem;
}
`;
