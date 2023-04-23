import styled from "styled-components";

export const StyledHeader = styled.header`
  padding-bottom: 1.5rem;
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
    }
  }

  @media screen and (max-width: 600px) {
    ul {
      display: none;
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
