import styled from "styled-components";

export const Footerstyled = styled.footer`
  background-color: #2c343e;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  margin: 30px 40px;

  .footer-title {
    padding-bottom: 1.5rem;
    svg {
      height: 22.153846740722656px;
      width: 22.153846740722656px;
      margin-right: 0.5rem;
    }
    img {
      height: 22.153846740722656px;
      width: 187.38461303710938px;
    }
  }

  ul {
    padding-bottom: 1.5rem;
    li {
      padding-bottom: 0.8rem;
      text-align: center;

      a:hover {
        color: #fefcf7;
      }
      a {
        font-size: 12px;
        font-weight: 700;
        line-height: 15px;
        letter-spacing: 0.9230769276618958px;
        text-align: left;
        color: #83888f;
      }
    }
  }

  .footer-social {
    width: 120px;
    display: flex;
    justify-content: space-between;
    a {
      display: flex;
      align-items: center;
    }
    a:hover {
      color: #fdd6ba;
    }
  }

  @media screen and (min-width: 600px) {
    ul {
      display: flex;
      justify-content: space-between;
      width: 283px;
      padding-bottom: 4rem;
    }
    .footer-title {
      padding-bottom: 1.5rem;
      svg {
        height: 24px;
        width: 24px;
      }
      img {
        height: 24px;
        width: 203px;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 40px;
    ul {
      padding: 0;
      li {
        padding-bottom: 0;
      }
    }
    .footer-title {
      padding-bottom: 0;
    }
    .footer-social {
      margin-left: 10rem;
    }
  }
`;
