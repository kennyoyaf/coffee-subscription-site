import styled from "styled-components"

export const Boxstyled = styled.div`
  cursor: pointer;
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
    .content {
      padding: 2rem 1rem;
      h6 {
        padding-bottom: 1rem;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    padding: 0;
    .content {
      padding: 2rem 1rem;
      h6 {
        padding-bottom: 1rem;
      }
    }
  }
`
