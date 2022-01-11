import styled from "styled-components";

export const Container = styled.div`
    
    div {
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-gap: 2%;
        max-width: 1120px;
        margin: 2rem auto;
        padding: 1rem;
        border-radius: 0.7rem;
        margin-top: 0;
        height: 100%;
        
    }

    img {
        width: 8%;
    }

    .selectProdut {
        width: 120%;
        background: var(--lightPurple);
        display: block;
        border: 1px solid var(--darkPurple);
        
        h1 {
            font-weight: lighter;
            font-size: 1rem;
            text-align: center;
        }

        #productsDropdown, button{
            text-align: center;
            display: block;
            width: 80%;
            height: 20%;
            margin: 0 auto;
            margin-top: 5%;
            margin-bottom: 5%;
            border-radius: 0.7rem;
            border: none;
            background: var(--background);
        }

        select {
            font-weight: normal;
        }

        button {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 10%;

            h2 {
                font-weight: normal;
                color: var(--darkPurple);
            }

            transition: filter 0.2s;

            &:hover {
                filter: brightness(0.95); 
            }
        }
    }

    
`