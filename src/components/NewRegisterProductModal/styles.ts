import styled  from "styled-components";

export const Container = styled.form`
    .buttonsDiv {
        display: flex;
        text-align: center;
        justify-content: center;
    }
    
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

        button[type="submit"] { 
            width: 50%;
            background: var(--background);
            border-radius: 2rem;
            border: 1px solid #7f7f7f;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 1rem;
            padding: 0.3rem;
            transition: hover 0.2s;
            font-weight: 500;
            font-size: 1rem;
            
            img {
                width: 15%;
                margin-right: 1rem;
            }
        }

        #saveBtn:hover {
                border: 1px solid #028A0F;
                color: #028A0F;
                font-weight: 700;
            }

            #cancelBtn:hover {
                border: 1px solid #b22222;
                color: #b22222;
                font-weight: 700;
            }
`