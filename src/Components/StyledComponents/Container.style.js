import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-dirextion:row;
    justify-content:center;
    align-items:center;
    width:100%;
    height:500px;
    margin:1em auto;
    padding:1.5em;  

    .container-1a{
        flex:1;
        height:100%;
    }

    .container-1a div{
        height:100%;
    }

    .container-1b{
        height:100%;
        display:flex;
        flex-direction:column;
        box-sizing:border-box;
    }

    img{
        width:100%;
        height:100%;
        object-fit: cover;
        box-sizing:border-box;
    }


    .container-1b img{
        max-height:12em;
    }

  
    @media(max-width:650px){
        flex-direction:column;
        height:40em;

        & div{
            width:100%;
        }

        & img{
            width:100%;
            height:15em;
        }
    }


`;