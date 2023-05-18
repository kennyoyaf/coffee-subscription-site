import styled from "styled-components";

export const SingleCollectionstyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 2.5rem;

  img {
    height: 151px;
    width: 200px;
  }

  .text {
    text-align: center;
    h4 {
      padding-top: 1rem;
      padding-bottom: 0.8rem;
      font-family: "Fraunces", serif;
      font-size: 24px;
      font-weight: 900;
      line-height: 32px;
      letter-spacing: 0px;
    }
    p {
      font-size: 15px;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: 0px;
      width: 90%;
      margin: 0 auto;
    }
  }

  @media screen and (min-width: 600px) and (max-width: 1023px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;

    img {
      height: 193px;
      width: 255px;
    }
    .text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      h4 {
        padding-top: 1rem;
        padding-bottom: 0.8rem;
        font-size: 24px;
        font-weight: 900;
        line-height: 32px;
        letter-spacing: 0px;
        text-align: left;
      }
      p {
        font-size: 15px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0px;
        text-align: left;
        width: 100%;
        display: flex;
        justify-content: flex-start;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    .text {
      h4 {
        font-size: 24px;
        font-weight: 900;
        line-height: 32px;
        letter-spacing: 0px;
        text-align: center;
      }
      p {
        font-size: 16px;
        font-weight: 400;
        line-height: 26px;
        letter-spacing: 0px;
        text-align: center;
      }
    }
  }
`;
