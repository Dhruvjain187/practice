import styled from "styled-components";

export const StyledForm = styled.form`
    width:60%;
    height:60%;
    border-radius: 3em;
    padding: 2.5em;
    margin:2em;

    input{
        border: none;
        border-radius: 0.6em;
        width:100%;
        height:2em;
    }

    input:hover{
        box-shadow: 2px 2px 20px rgb(178, 246, 247,0.5)
    }

    button{
        border: none;
        width:100%;
        height:3em;
        border-radius: 0.8em;
        background-color: magenta;
    }
`;
