import styled from "styled-components";

export const Subscribestyled = styled.main`
  margin: 0 auto;
  .total-accordion {
    width: 100%;
  }
  .detail {
    display: none;
  }
  .main-btn {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 7rem;
  }
  button {
    height: 56px;
    width: 217px;
    border-radius: 6px;
    background-color: #0e8784;
    color: #fefcf7;
    font-family: "Fraunces", serif;
    font-size: 18px;
    font-weight: 900;
    line-height: 25px;
    letter-spacing: 0px;
    text-align: center;
    border: none;
  }

  @media screen and (min-width: 1024px) {
    .main-btn {
      justify-content: flex-end;
      padding-right: 4rem;
    }
    .total-accordion {
      padding: 0 4rem;
      display: grid;
      grid-template-columns: 35% 65%;
    }
    .detail {
      display: block;
      padding-top: 3.5rem;
      p {
        font-family: "Fraunces", serif;
        font-size: 24px;
        font-weight: 900;
        line-height: 32px;
        letter-spacing: 0px;
        text-align: left;
        color: rgba(131, 136, 143, 0.25);
        padding: 1rem 0;
        span {
          padding-right: 1rem;
        }
      }
      p:hover {
        color: #333d4b;
        span {
          color: #0e8784;
        }
      }

      hr {
        background-color: rgba(131, 136, 143, 0.25);
        width: 60%;
        border: none;
        height: 1px;
      }
    }
  }
`;
