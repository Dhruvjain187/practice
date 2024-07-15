import styled from "styled-components";

export const Flex = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center; 

    & a{
        margin-right:0.5em;
        text-decoration:none;
        padding:0.7em;
        color:white;
        border-radius:0.7em;
        cursor:pointer;
        text-align:center;
    }

    a:hover{
        background-color: rgba(104, 95, 95, 0.5);
        font-weight:bolder;
    }

    @media(max-width:680px){
        a{
            padding:0.5em;
        }
    }

      
`;