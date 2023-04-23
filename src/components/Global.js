import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;700&display=swap');

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
    padding: 30px 40px;
}

ul {
    list-style: none;
  }

  a{
    text-decoration: none;
  }
`;
export default GlobalStyles;
