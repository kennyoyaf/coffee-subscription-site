import styled from "styled-components";

export const Container = styled.main`
  margin: 0 auto;
  h3 {
    text-align: center;
    font-family: "Fraunces", serif;
    font-size: 40px;
    font-weight: 900;
    line-height: 72px;
    letter-spacing: 0px;
    background-color: #83888f;
    background-image: linear-gradient(
      180deg,
      rgba(254, 252, 247, 0.0001) 0%,
      #fefcf7 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }

  @media screen and (min-width: 600px) and (max-width: 1023px) {
    h3 {
      font-size: 96px;
      font-weight: 900;
      line-height: 72px;
      height: 72px;
      letter-spacing: 0px;
      text-align: center;
      margin-bottom: -3rem;
    }
  }

  @media screen and (min-width: 1024px) {
    h3 {
      font-family: Fraunces 9pt;
      font-size: 150px;
      font-weight: 900;
      line-height: 72px;
      height: 72px;
      letter-spacing: 0px;
      text-align: center;
      margin-bottom: -3rem;
    }
    .single {
      display: flex;
    }
  }
`;
