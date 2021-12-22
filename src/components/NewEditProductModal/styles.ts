import styled from "styled-components";

export const Container = styled.form `

    header {
        display: block;
        justify-content: center;
        text-align: center;
        margin-bottom: 2rem;

        h2 {
            color: var(--darkPurple);
            font-size: 1.5rem;
            margin-bottom: 2rem;
            display: block;
            text-align: center;
        }

        input {
            width: 100%;
            padding: 1.5rem;
            height: 4rem;
            border-radius: 0.25rem;
            border: 1px solid #d7d7d7;
            background: #f9f1fe;
            font-size: 1rem;
            margin-bottom: 3rem;
        }
    }
    

    main {
        display: flex;
        justify-content: space-between;
        align-items: center;
       
        h3 {
            margin-left: 1rem;
            font-weight: lighter;
       }
    }
    
    .productEdition {
        display: block;
        margin: 0 2rem;
        
        img {
            width: 7%;
        }
    }

    .productEdition.productInfo input{
            padding: 0.5rem;
            height: 3rem;
            border-radius: 0.8rem;
            border: 1px solid #d7d7d7;
            background: var(--background);
            font-size: 1rem;
            margin-bottom: 1rem;
    } 

    .productEdition.buttonsEdition button[type="submit"] { 
            height: 3rem;
            background: var(--background);
            border-radius: 2rem;
            border: 1px solid #7f7f7f;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 2rem  0.8rem;
            padding: 0.3rem;
            transition: hover 0.2s;
            font-weight: 500;
            font-size: 1rem;

            img {
                width: 20%;
                margin-right: 1rem;
            }    
        }

    #saveEditionButton:hover {
        border: 1px solid #028A0F;
        color: #028A0F;
        font-weight: 700;
    }

    #cancelEditionButton:hover {
        border: 1px solid #b22222;
        color: #b22222;
        font-weight: 700;
    }

    #deleteEditionButton:hover {
        border: 1px solid var(--darkPurple);
        color: var(--darkPurple);
        font-weight: 700;
    }

            
           
        
    


        
        
       

`