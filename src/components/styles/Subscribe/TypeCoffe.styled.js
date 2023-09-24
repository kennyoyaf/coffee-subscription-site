import styled from "styled-components"

export const TypeCoffestyled = styled.div`
  margin: 5rem 0;
  padding: 0 2rem;
  .head-text {
    display: flex;
    align-items: center;
    padding-bottom: 1rem;
    width: 100%;
    position: relative;
    cursor: pointer;
    h4 {
      font-family: "Fraunces", serif;
      font-size: 24px;
      font-weight: 900;
      line-height: 28px;
      letter-spacing: 0px;
      text-align: left;
      color: #83888f;
      width: 70%;
    }
    .btn {
      position: absolute;
      right: 0;
      height: 11.924091339111328px;
      width: 18.191329956054688px;
      display: flex;
      align-items: center;
    }
  }

  .content {
    background-color: #f4f1eb;
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 8px;

    h6 {
      font-family: "Fraunces", serif;
      font-size: 24px;
      font-weight: 900;
      line-height: 32px;
      letter-spacing: 0px;
      text-align: left;
    }

    p {
      font-size: 16px;
      font-weight: 400;
      line-height: 26px;
      letter-spacing: 0px;
      text-align: left;
    }
  }

  .content:hover {
    background-color: #fdd6ba;
  }

  .content:active {
    background-color: #0e8784;
    h6 {
      color: #ffffff;
    }
    p {
      color: #ffffff;
    }
  }

  @media screen and (min-width: 600px) and (max-width: 1023px) {
    padding: 0 4rem;
    .head-text {
      h4 {
        width: 100%;
      }
    }
    .main-items {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 1rem;
      .content {
        padding: 2rem 1rem;
        h6 {
          padding-bottom: 1rem;
        }
      }
    }
  }

  @media screen and (min-width: 1024px) {
    padding: 0;
    .head-text {
      h4 {
        width: 100%;
      }
    }
    .main-items {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 1rem;
      .content {
        padding: 2rem 1rem;
        h6 {
          padding-bottom: 1rem;
        }
      }
    }
  }
`
