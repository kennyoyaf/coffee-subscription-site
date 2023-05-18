import styled from "styled-components";

export const Summarystyled = styled.div`
  width: 90%;
  margin: 0 auto;
  background-color: #2c343e;
  padding: 4rem 2rem;
  margin-bottom: 2.5rem;
  border-radius: 0.8rem;
  h6 {
    color: rgba(255, 255, 255, 0.537);
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0px;
    text-align: left;
    padding-bottom: 1rem;
  }
  p {
    color: #ffffff;
    font-family: "Fraunces", serif;
    font-size: 24px;
    font-weight: 900;
    line-height: 40px;
    letter-spacing: 0px;
    text-align: left;
  }

  @media screen and (min-width: 1024px) {
    margin: unset;
    position: relative;
    float: right;
    width: 60%;
    margin-right: 3rem;
    margin-bottom: 2.5rem;
  }
`;
