import styled from "styled-components"

export const ContainerItens = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f3f3f3;
    border-radius: 5px;
    padding: 5px 15px;
    width: 30%;


    @media (max-width:750px){
        width: 20%;
    }

    p{
        font-size: 12px;
    }

    span{
        font-size: 20px;
    }

    svg{
        display: none;
    }

`;


export const Header = styled.header`

    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    gap: 10px;

`;




