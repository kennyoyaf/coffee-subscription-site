import styled from "styled-components";

export const Orderstyled = styled.section`
  background-color: ${({ bgcolor }) => bgcolor};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 4rem 2rem;
  img {
    width: 100%;
    display: none;
  }

  h5 {
    font-family: "Fraunces", serif;
    font-size: 24px;
    font-weight: 900;
    line-height: 32px;
    letter-spacing: 0px;
    text-align: center;
    color: #83888f;
    padding-bottom: 2rem;
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
    margin-top: 3rem;
    margin-bottom: 5rem;
  }

  button:hover {
    background-color: #66d2cf;
  }

  @media screen and (min-width: 600px) and (max-width: 1023px) {
    margin: 0 auto;
    align-items: flex-start;
    img {
      display: block;
      width: 75%;
    }
    h5 {
      font-size: 24px;
      font-weight: 900;
      line-height: 32px;
      letter-spacing: 0px;
      text-align: left;
    }
  }

  @media screen and (min-width: 1024px) {
    margin: 0 auto;
    align-items: flex-start;
    width: 95%;
    img {
      display: block;
      width: 75%;
    }
    h5 {
      font-size: 24px;
      font-weight: 900;
      line-height: 32px;
      letter-spacing: 0px;
      text-align: left;
    }
  }
`;
