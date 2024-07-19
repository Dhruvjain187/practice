import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  body {
    color: hsl(192, 100%, 9%);
    font-family: Georgia,cursive;
    font-size: 1.15em;
    margin: 0;
    padding: 0;
    max-width: 100vw;
    height: 100vh;
  }

  p {
    opacity: 0.6;
    line-height: 1.5;
  }

  img {
    max-width: 100%;
}
`;