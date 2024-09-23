import styled from "styled-components"

export const Container = styled.div`
    justify-content: space-between;
    padding: 20px;
    background-color: black;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    h1{
        text-align: center;
        padding: 3vh;
        color: aliceblue;
    }
    .box1{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
        margin-top: auto;
        padding: 15px;
        flex-grow: 1;
        min-height: 80vh;
        
    }
    .box2{
        display: flex;
        justify-content: center;
    }
    
    @media (max-width: 1024px) { /* Tablets */
        .box1 {
            flex-direction: column;
        }
    }

    @media (max-width: 768px) { /* Smartphones */
        padding: 10px;

        .box1 {
            justify-content: center;
            padding: 10px;
        }

        h1 {
            font-size: 24px;
        }
        .botaoSair img{
            width: 20%;
        }
    }

    `

export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    background-color: #161f24;
    padding: 70px;
    border-radius: 20px;
    
    h2{
        color:#57aed1;
        padding: 15px;
        font-size: 35px;
        margin-bottom: 4%;
    }
    input{
        width: 70%;
        font-size: 20px;
        color: black;
        margin: 5px 0;
        padding: 8px;
        border: 1px solid #ccc;
        background-color: #57aed1;
        border: none;
        border-radius:6px;
    }
    ::placeholder{
        color: black;
    }
    button{
        font-size: 20px;
        width: fit-content;
        padding: 10px 15px;
        background-color: #57aed1;
        border-radius: 6px;
        color: white;
        border: none;
        margin-top: 10px;
        cursor: pointer;
        
        &:hover {
            background-color: #233842;
        }
    }
    select{
        border: none;
        border-radius: 6px;
        margin: 5px;
        width: 70%;
        font-size: 20px;
        background-color: #57aed1;
        margin: 5px 0;
        padding: 8px;
    }

    @media (max-width: 1024px) { /* Tablets */
        padding: 50px;
    
        h2 {
            font-size: 28px;
        }
        
        input, select {
            width: 80%;
        }
    }
    
    @media (max-width: 768px) { /* Smartphones */
        padding: 30px;
    
        h2 {
            font-size: 22px;
        }
        
        input, select {
            width: 100%;
        }
    }
    `

export const SectAgDetails = styled.section`
    padding: 20px;
    background-color: #161f24;
    padding: 50px;
    border-radius: 20px;

    
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    p{
        color: aliceblue;
        font-size: 25px;
        padding: 8px;
        text-align: center;

    }
    h2{
        color:#57aed1;
        padding: 15px;
        font-size: 35px;
    }
    button{
        width: fit-content;
        padding: 10px 15px;
        border-radius: 10px;
        margin: 10px;
        background-color: #57aed1;
        color: white;
        font-size: 20px;
        border: none;
        cursor: pointer;

        &:hover {
            background-color: #233842;
        }
    }
    .boxBotoes{
        display: flex;
        justify-content: space-around;
        margin-top: 5%;
    }

    @media (max-width: 1024px) { /* Tablets */
        padding: 40px;
        
        h2 {
            font-size: 30px;
        }
    }

    @media (max-width: 768px) { /* Smartphones */
        padding: 20px;

        h2 {
            font-size: 25px;
        }

        p {
            font-size: 18px;
        }

        .boxBotoes {
            flex-direction: column;
            align-items: center;
        }
    }
`

export const ChatContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 400px; /* Ajuste a largura conforme necessário */
  height: 600px; /* Ajuste a altura conforme necessário */
  z-index: 1000;
`;