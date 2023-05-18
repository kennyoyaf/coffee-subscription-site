import styled from "styled-components";

export const Workstyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    color: #fdd6ba;
    font-family: "Fraunces", serif;
    font-size: 72px;
    font-weight: 900;
    line-height: 72px;
    letter-spacing: 0px;
    text-align: center;
    padding-bottom: 2rem;
    padding-top: 3rem;
  }
  h4 {
    color: ${({ textcolor }) => (textcolor ? textcolor : "#2C343E")};
    font-family: "Fraunces", serif;
    font-size: 28px;
    font-weight: 900;
    line-height: 32px;
    letter-spacing: 0px;
    text-align: center;
    padding-bottom: 1.5rem;
  }
  p {
    color: ${({ textcolor }) => textcolor || "#2C343E"};
    font-size: 15px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0px;
    text-align: center;
    margin: 0 auto;
    width: 90%;
  }

  @media screen and (min-width: 600px) and (max-width: 1023px) {
    h2 {
      font-size: 72px;
      font-weight: 900;
      line-height: 72px;
      letter-spacing: 0px;
      text-align: left;
    }
    h4 {
      font-size: 28px;
      font-weight: 900;
      line-height: 32px;
      letter-spacing: 0px;
      text-align: left;
      width: 90%;
    }
    p {
      font-size: 15px;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: 0px;
      text-align: left;
      margin: unset;
    }
  }

  @media screen and (min-width: 1024px) {
    h2 {
      font-size: 72px;
      font-weight: 900;
      line-height: 72px;
      letter-spacing: 0px;
      text-align: left;
    }
    h4 {
      font-size: 32px;
      font-weight: 900;
      line-height: 36px;
      letter-spacing: 0px;
      text-align: left;
      width: 60%;
    }
    p {
      font-size: 16px;
      font-weight: 400;
      line-height: 26px;
      letter-spacing: 0px;
      text-align: left;
      margin: unset;
    }
  }
`;
