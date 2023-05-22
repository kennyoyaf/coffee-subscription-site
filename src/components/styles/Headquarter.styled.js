import styled from "styled-components";

export const Headquarterstyled = styled.section`
  margin-top: 6rem;
  h3 {
    font-family: "Fraunces", serif;
    font-size: 24px;
    font-weight: 900;
    line-height: 32px;
    letter-spacing: 0px;
    text-align: center;
    color: #83888f;
  }

  .country {
    text-align: center;
    padding: 3rem 0;
  }

  @media screen and (min-width: 600px) and (max-width: 1023px) {
    width: 90%;
    margin: 0 auto;
    margin-top: 6rem;
    h3 {
      font-size: 24px;
      font-weight: 900;
      line-height: 32px;
      letter-spacing: 0px;
      text-align: left;
    }
    .country {
      display: flex;
      justify-content: space-between;
      margin-right: 6rem;
      text-align: left;
    }
  }

  @media screen and (min-width: 1024px) {
    width: 90%;
    margin: 0 auto;
    margin-top: 6rem;
    h3 {
      font-size: 24px;
      font-weight: 900;
      line-height: 32px;
      letter-spacing: 0px;
      text-align: left;
    }
    .country {
      display: flex;
      justify-content: space-between;
      margin-right: 6rem;
      text-align: left;
    }
  }
`;
