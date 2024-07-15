import styled from "styled-components";

export const Unorder = styled.ul`
    flex:1;
    height:15em;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    background-color:#290b79;
    padding:0.2em;
    margin:0px;

    @media(max-width:580px){
        width:32em;
        padding-top:2.5em;
    }
`;