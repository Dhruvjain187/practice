import styled from "styled-components";

export const Card = styled.div`
    width:20em;
    height:20em;
    padding:1em;
    border-radius:2em;
    text-align:center;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    transition:1.3s;

    &:hover{
        transform:scale(1.1);
        background-color: rgba(132, 225, 220,0.2);
    }

    img{
        border-top-left-radius:2em;
        border-top-right-radius:2em;
        width:100%;
        height:60%;
    }


    button{
        padding:0.5em;
        border: none;
        border-radius:2em;
        background-color:rgb(232, 93, 213);
        color:white;
        font-weight: 800;
        cursor: pointer;
    }
`;