import styled from "styled-components";

export const Subscribestyled = styled.main`
  margin: 0 auto;
  .total-accordion {
    width: 100%;
  }
  .detail {
    display: none;
  }

  .summary {
    width: 85%;
    padding: 2rem;
    background-color: #2c343e;
    margin: 0 auto;
    margin-bottom: 2rem;
    border-radius: 10px;
    h6 {
      font-size: 16px;
      font-weight: 400;
      line-height: 26px;
      letter-spacing: 0px;
      text-align: left;
      color: rgba(255, 255, 255, 0.537);
      text-transform: uppercase;
      padding-bottom: 1rem;
    }
    p {
      font-family: "Fraunces", serif;
      font-size: 24px;
      font-weight: 900;
      line-height: 40px;
      letter-spacing: 0px;
      text-align: left;
      color: #ffffff;
      .green {
        color: #0e8784;
      }
      .green:nth-of-type(5) {
        padding-left: 0.5rem;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    .total-accordion {
      padding: 0 4rem;
      display: grid;
      grid-template-columns: 35% 65%;
    }
    .summary {
      padding: 3rem;
      width: 60%;
      margin: 0;
      margin: 3rem;
    }
    .new {
      display: flex;
      justify-content: flex-end;
    }
    .detail {
      display: block;
      padding-top: 4.5rem;
      a {
        font-family: "Fraunces", serif;
        font-size: 24px;
        font-weight: 900;
        line-height: 32px;
        letter-spacing: 0px;
        text-align: left;
        color: rgba(131, 136, 143, 0.25);

        span {
          padding-right: 1rem;
        }
      }
      a:hover {
        color: #333d4b;
        span {
          color: #0e8784;
        }
      }
      /* a:nth-of-type(1) {
        margin-top: 7rem;
      } */
      hr {
        background-color: rgba(131, 136, 143, 0.25);
        width: 75%;
        border: none;
        height: 1px;
        margin: 1rem 0;
      }
    }
  }
`;
