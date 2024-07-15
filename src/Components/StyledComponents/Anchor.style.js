import styled from "styled-components";

export const Anchor = styled.a`
    margin-right:0.5em;
    padding:0.7em;
    color:white;
    border-radius:0.7em;
    cursor:pointer;
    text-align:center;
    
    &:hover{
        background-color: rgba(104, 95, 95, 0.5);
        font-weight:bolder;
    }

    @media(max-width:680px){
        padding:0.5em;
    }
`;