import styled from "styled-components";

export const Whystyled = styled.section`
  background-color: #2c343e;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  border-radius: 10px;
  width: 85%;
  height: 902px;
  margin-bottom: 42rem;
  margin-top: 8rem;

  h2 {
    color: #fefcf7;
    font-family: "Fraunces", serif;
    font-size: 28px;
    font-weight: 900;
    line-height: 28px;
    letter-spacing: 0px;
    text-align: center;
    padding-top: 3rem;
  }

  p {
    color: #fefcf7;
    font-size: 15px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0px;
    text-align: center;
    padding: 3rem 0;
    width: 90%;
    color: rgba(254, 252, 247, 0.8);
  }

  @media screen and (min-width: 600px) and (max-width: 1023px) {
    margin-bottom: 25rem;
    height: 573px;
    h2 {
      font-size: 32px;
      font-weight: 900;
      line-height: 48px;
      letter-spacing: 0px;
      text-align: center;
    }

    p {
      font-size: 15px;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: 0px;
      text-align: center;
      padding: 0 0;
      margin: 2rem 0;
    }
  }

  @media screen and (min-width: 1024px) {
    height: 453px;
    width: 90%;
    margin-bottom: 20rem;

    h2 {
      font-size: 40px;
      font-weight: 900;
      line-height: 48px;
      letter-spacing: 0px;
      text-align: center;
    }

    p {
      font-size: 16px;
      font-weight: 400;
      line-height: 26px;
      letter-spacing: 0px;
      text-align: center;
      width: 55%;
    }
  }
`;
