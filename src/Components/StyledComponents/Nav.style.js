import styled from 'styled-components';

export const Nav = styled.nav`
    display:flex;
    justify-content:space-between;
    background-color:blue;
    padding:20px 30px;
    width:100%;
    height:4em;
    border-radius:1em;
    margin:0;
    position:fixed;
    top:0;
    z-index:10;

    & input,label{
        display:none;
    }

    @media(min-width:410px){
        & a{
            margin-right:1.5em;
        }
    }

    @media(max-width:800px){
        div:first-child{
            display:none;
        }

        

        @media(max-width:800px){
        & div:nth-child(2) a{
            padding:0px;
        }
        
        & .link-container{
            display:none;
            flex-direction:column;
            align-items:flex-start;

            position:fixed;
            top:0;
            right:0;
            z-index:10;
            width:200px;
            background-color: rgba(104, 95, 95, 0.5);

        }

        

        .link-container a{
            height:auto;
            width:100%;
            padding:30px 20px 30px 20px
        }

        .link-container a:hover{
            z-index:12;
            background-color:black;
        }

        .link-container label{
            height:auto;
            width:100%;
            padding:0px 0px 0px 20px
        }

        & .close-sidebar,.open-sidebar{
            display:block;
            color:white;
        }


        #sidebar-active:checked ~ .link-container{
            display:flex;
        }  
    }
    }
`;