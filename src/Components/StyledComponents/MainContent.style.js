import styled from "styled-components"
export const MainContent = styled.div`
    padding-top:4.5em;
    height:700px;
    width:100%;
    background-image:url("https://media.istockphoto.com/id/1176789549/photo/handsome-gentleman-downtown.jpg?s=1024x1024&w=is&k=20&c=psf6n8f2mWlkiCxZKh4LHJeEjda-4dv4H734xm8MBiA=");
    opacity:0.8;


    & div{
        width:100%;
        height:100%;
        box-sizing:border-box;
        display:flex;
        justify-content:center;
        align-items:center;
    }

    & p{
        width:100%;
        text-align:center;
        color:black;
        font-size:2em;
        font-weight:900;
        opacity:1;
    }




    @media(max-width:700px){
        background-size: cover;
    }

    `;