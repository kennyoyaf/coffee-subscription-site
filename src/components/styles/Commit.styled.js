import styled from "styled-components";

export const Commitstyled = styled.section`
  width: 90%;
  margin: 0 auto;
  .img {
    display: flex;
    justify-content: center;
  }
  img {
    border-radius: 10px;
  }
  .text {
    h4 {
      font-family: "Fraunces", serif;
      font-size: 32px;
      font-weight: 900;
      line-height: 48px;
      letter-spacing: 0px;
      text-align: center;
      padding: 2rem 0;
    }
    p {
      font-size: 15px;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: 0px;
      text-align: center;
      padding-bottom: 5rem;
    }
  }

  @media screen and (min-width: 600px) and (max-width: 1023px) {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 15rem;

    img {
      width: 100%;
    }
    .text {
      width: 50%;
      display: flex;
      flex-direction: column;

      h4 {
        text-align: left;
      }
      p {
        text-align: left;
        width: 80%;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 15rem;
    .img {
      width: 40%;
      border-radius: 10px;
    }
    img {
      width: 100%;
      object-fit: contain;
    }
    .text {
      width: 40%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      h4 {
        text-align: left;
      }
      p {
        text-align: left;
        width: 100%;
      }
    }
  }
`;
