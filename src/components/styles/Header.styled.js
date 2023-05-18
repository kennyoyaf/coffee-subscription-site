import styled from "styled-components";

export const StyledHeader = styled.header`
  padding-bottom: 1.5rem;
  padding: 30px 40px;
  .coffeeheader {
    display: flex;
    justify-content: space-between;
  }
  .roasters {
    display: flex;
    align-content: center;

    svg {
      margin-right: 0.5rem;
      height: 24px;
      width: 24px;
    }

    img {
      height: 24px;
      width: 203px;
    }
  }
  .hamburger-list {
    width: 283px;
    display: flex;
    align-items: center;
  }
  .Hamburger {
    display: none;
  }

  ul {
    display: flex;
    justify-content: space-between;
    width: 100%;

    li {
      font-size: 12px;
      font-weight: 700;
      line-height: 15px;
      letter-spacing: 0.9230769276618958px;
      text-align: left;
    }

    a {
      color: #83888f;
      text-transform: uppercase;
    }
  }

  @media screen and (max-width: 600px) {
    ul {
      list-style: none;
      width: 100%;
      flex-direction: column-reverse;
      align-items: center;
      justify-content: flex-start;
      font-family: "Fraunces", serif;
      padding: 4rem 0;
      position: absolute;
      right: 0;
      left: 0;
      top: 50px;
      bottom: 0;
      background: linear-gradient(
        180deg,
        rgba(254, 252, 247, 0.504981) 0%,
        #fefcf7 55.94%
      );
      transform: matrix(1, 0, 0, -1, 0, 0);
      li {
        transform: matrix(1, 0, 0, -1, 0, 0);
        padding-top: 2rem;
        a {
          font-size: 24px;
          font-weight: 900;
          line-height: 32px;
          letter-spacing: 0px;
          text-align: center;
          color: #333d4b;
          transform: matrix(1, 0, 0, -1, 0, 0);
          text-transform: none;
        }
      }
    }
    .hamburger-list {
      width: 2rem;
    }
    .Hamburger {
      display: block;
    }
    .roasters {
      svg {
        height: 16.615385055541992px;
        width: 16.576271057128906px;
      }
      img {
        height: 16.615385055541992px;
        width: 140.20762634277344px;
      }
    }
  }
`;
