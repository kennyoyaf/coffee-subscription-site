import styled from "styled-components";

export const Choosestyled = styled.div`
  height: 382px;
  width: 279px;
  border-radius: 8px;
  background-color: #0e8784;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;

  img {
    margin-top: 3rem;
  }

  h4 {
    font-family: "Fraunces", serif;
    font-size: 24px;
    font-weight: 900;
    line-height: 32px;
    letter-spacing: 0px;
    text-align: center;
    margin-top: 2rem;
    color: #fefcf7;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0px;
    text-align: center;
    margin: 0 auto;
    padding: 2rem 0;
  }

  @media screen and (min-width: 600px) and (max-width: 1023px) {
    height: 180px;
    width: 473px;
    max-width: 100%;
    flex-direction: row;
    justify-content: center;
    padding: 0 3.5rem;
    h4 {
      font-size: 24px;
      font-weight: 900;
      line-height: 32px;
      letter-spacing: 0px;
      text-align: left;
      margin-top: 0;
      margin-bottom: 0.7rem;
    }
    .img {
      margin-right: 2rem;
      img {
        margin-top: 0;
      }
    }
    p {
      font-size: 15px;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: 0px;
      text-align: left;
      margin: unset;
      padding: 0 0;
      width: 100%;
    }
  }

  @media screen and (min-width: 1024px) {
    margin-bottom: 0;
  }
`;
