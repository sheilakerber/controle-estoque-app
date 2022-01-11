import styled from "styled-components";

export const Container = styled.div`  
    div {
        position: absolute;
        display: flex;
        flex-wrap: wrap;
        width: 40%;
        height: 37%;
        background: var(--background);
        border: 1px solid red;
        border-radius: 0.7rem;
        margin-top: 1rem; 
        margin-left: -40rem;
        padding: 0;
        
    }
    
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

    .lowStockSelection{
            display: flex;
            text-align: center;
            justify-content: space-between;
            align-items: center;
            margin: 0 20%;
            padding: 3rem 0;

            select, p {
                //background: var(--background);
                border: 1px solid #D3D3D3;
                padding: 1rem ;
                margin-left: 2rem;
                color: gray;
                border-radius: 0.7rem;
                font-weight: normal;
                font-size: 1rem;   
            }
        }


    


     
`