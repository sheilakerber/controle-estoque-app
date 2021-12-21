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
        background: var(--lightPurple);
        display: block;

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

    .lowStockProducts {
        display: block;
        width: 100%;
        background: var(--background);
        border: 1px solid red;

        .lowStockTitle {
            display: flex;
            text-align: center;
            justify-content: space-between;
            align-items: center;
            margin: 3% 15%;

            img {
                width: 20%;
            }

            h1 {
                color: #D91313;
                font-weight: normal;
            }
            strong {
                color: #D9131354;
                font-weight: lighter;
            }
        }

        .lowStockSelection {
            display: flex;
            text-align: center;
            justify-content: space-between;
            align-items: center;
            margin: 0 20%;

            select, p {
                //background: var(--background);
                border: 1px solid #D3D3D3;
                padding: 1% 7%;
                color: gray;
                border-radius: 0.7rem;
                font-weight: normal;
                font-size: 1rem;   
            }
        }
    }
`