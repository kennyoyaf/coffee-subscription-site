import styled from "styled-components";

export const Countrystyled = styled.div`
  padding: 2rem 0;
  img {
    padding-bottom: 2.5rem;
  }
  h2 {
    font-family: "Fraunces", serif;
    font-size: 28px;
    font-weight: 900;
    line-height: 36px;
    letter-spacing: 0px;
    text-align: center;
    padding-bottom: 1.5rem;
  }
  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0px;
    text-align: center;
  }

  @media screen and (min-width: 600px) and (max-width: 1023px) {
    h2 {
      text-align: left;
    }
    p {
      text-align: left;
    }
  }

  @media screen and (min-width: 1024px) {
    h2 {
      text-align: left;
    }
    p {
      text-align: left;
    }
  }
`;
