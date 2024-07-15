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

    img{
        border-top-left-radius:2em;
        border-top-right-radius:2em;
        width:100%;
        height:60%;
    }

    &:hover{
        transform:scale(1.1);
        
    }

    button{
        padding:0.5em;
        border-radius:2em;
        background-color:#290b79;
        color:#087d9b;
    }
`;