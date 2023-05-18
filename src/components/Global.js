import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body{
    font-family: 'Barlow', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;
    color: #333D4B;
    background-color: #FEFCF7;
}

ul {
    list-style: none;
  }

  a{
    text-decoration: none;
  }
`;
export default GlobalStyles;
