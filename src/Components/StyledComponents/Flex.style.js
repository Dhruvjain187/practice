import styled from "styled-components";

export const Flex = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center; 
    width:${({ width }) => width || "auto"};
    margin: ${({ margin }) => margin || "0"};
    flex-wrap: ${({ wrap }) => wrap || "nowrap"};
    height: ${({ height }) => height || "auto"};
    position: relative;
    padding: ${({ padding }) => padding || "0"};
    

    & a{
        opacity: 1;
        margin-right:0.5em;
        text-decoration:none;
        padding:0.7em;
        color:black;
        font-weight: 900;
        border-radius:0.7em;
        cursor:pointer;
        text-align:center;
        transition: 0.6s;
    }

    & a:hover{
        background-color: rgba(104, 95, 95, 0.5);
        font-weight:bolder;
    }

    .logo-container{
        height: 5em;
        width: 5.5em;
    }

    .logo-container img{
        height:100%;
        width: 100%;
        padding: 5px;
        box-sizing: border-box;
        transition:padding 0.4s ease-in-out;
    }

    .logo-container img:hover{
        padding: 0px;
    }

    & .image-container{
        width: 100%;
        height: 100%;
    }

    & .image-container img{
        height: 100%;
        width: 100%;
        padding: 1em;
        box-sizing: border-box;
        transition: padding 1s ease-in-out;
    }

    & .image-container img:hover{
        padding: 0;
    }

    & p{
        width: 100%;
        position: absolute;
        font-weight: 800;
        color:white;
        font-size: 2.7em;
        text-align: center;
        opacity: 1;
        transition: 0.4s;
    }

    & p:hover{
        font-weight: bolder;
        font-size: 2.8em;
    }

    @media(max-width:680px){
        a{
            padding:0.5em;
        }
    }

      
`;