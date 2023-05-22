import styled from "styled-components";

export const Compromisestyled = styled.section`
  width: 90%;
  margin: 0 auto;
  background-color: #2c343e;
  height: 601px;
  position: relative;
  border-radius: 10px;
  width: 90%;
  padding: 0 2rem;
  margin-top: 6rem;

  .img {
    display: flex;
    justify-content: center;
    position: absolute;
    top: -4rem;
    left: 0;
    right: 0;
    .mobile {
      border-radius: 10px;
      width: 80%;
    }
    .desktop {
      display: none;
    }
  }

  h4 {
    font-family: "Fraunces", serif;
    font-size: 28px;
    font-weight: 900;
    line-height: 40px;
    letter-spacing: 0px;
    text-align: center;
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    color: #fefcf7;
    padding-top: 12rem;
  }
  p {
    font-size: 15px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0px;
    text-align: center;
    color: rgba(254, 252, 247, 0.8);
  }

  @media screen and (min-width: 600px) and (max-width: 1023px) {
    height: 575px;
    .img {
      top: -10rem;
    }
    h4 {
      padding-top: 16rem;
      font-size: 32px;
      font-weight: 900;
      line-height: 48px;
      letter-spacing: 0px;
    }
    p {
      width: 90%;
      margin: 0 auto;
    }
  }

  @media screen and (min-width: 1024px) {
    height: 575px;
    display: flex;
    justify-content: space-between;
    .text {
      width: 100%;
    }
    .img {
      width: 40%;
      height: 475px;
      left: unset;
      right: 2rem;
      top: -3rem;
      justify-content: flex-end;
      .mobile {
        display: none;
      }
      .desktop {
        display: block;
        border-radius: 10px;
        width: 100%;
      }
    }

    .new {
      width: 50%;
      h4 {
        padding-top: 6rem;
        justify-content: flex-start;
        font-size: 32px;
        font-weight: 900;
        line-height: 48px;
        letter-spacing: 0px;
        text-align: left;
      }
      p {
        text-align: left;
      }
    }
  }
`;
