import styled from "styled-components";

export const CardContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center; 
    margin-top:4.2em;
    height:100%;
    padding: 1em;
    flex-wrap:wrap;

    @media(max-width:750px){
        div{
            width:100%
        }
    }  
`