import styled from "styled-components";

export const FooterContainer = styled.div`
    display:flex;
    flex-dirextion:row;
    justify-content:space-between;
    align-items:center;  

    .unique-ul{
        justify-content:center;
        align-items:center;
    }

    @media(max-width:580px){
        flex-direction:column;   
        height:25em;

        .unique-ul{
            display:none;
        }
    }
`;