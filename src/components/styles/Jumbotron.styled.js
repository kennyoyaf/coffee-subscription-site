import styled from "styled-components"

export const JumbotronStyled = styled.section`
  background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  height: 500px;
  width: 80%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 10rem;

  h2 {
    font-family: "Fraunces", serif;
    font-size: 40px;
    font-weight: 900;
    line-height: 40px;
    letter-spacing: 0px;
    text-align: center;
    color: #fefcf7;
    width: 90%;
    padding-bottom: 2rem;
  }

  p {
    font-size: 15px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0px;
    text-align: center;
    color: rgba(254, 252, 247, 0.8);
    width: 90%;
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
    margin-top: 30px;
    cursor: pointer;
  }

  button:hover {
    background-color: #66d2cf;
  }

  @media screen and (min-width: 600px) and (max-width: 1024px) {
    background-image: url(${({ tabbackground }) => tabbackground});
    align-items: flex-start;
    width: 90%;
    background-size: 100% 454px, contain;
    background-repeat: no-repeat;
    height: 454px;
    margin-bottom: 7rem;
    h2 {
      font-size: 48px;
      font-weight: 900;
      line-height: 48px;
      letter-spacing: 0px;
      text-align: left;
      margin-left: 3rem;
      width: 50%;
    }

    p {
      font-size: 15px;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: 0px;
      text-align: left;
      width: 60%;
      margin-left: 3rem;
    }

    button {
      margin-left: 3rem;
    }
  }

  @media screen and (min-width: 1024px) {
    background-image: url(${({ lgbackground }) => lgbackground});
    align-items: flex-start;
    width: 95%;
    height: 550px;
    background-size: 100% 550px, contain;
    background-repeat: no-repeat;
    border-radius: 10px;
    margin-bottom: 6rem;
    h2 {
      font-size: 72px;
      font-weight: 900;
      line-height: 72px;
      letter-spacing: 0px;
      text-align: left;
      margin-left: 3rem;
      width: 50%;
    }

    p {
      font-size: 16px;
      font-weight: 400;
      line-height: 26px;
      letter-spacing: 0px;
      text-align: left;
      width: 35%;
      margin-left: 3rem;
      padding-bottom: 1rem;
    }

    button {
      margin-left: 3rem;
    }
  }
`
