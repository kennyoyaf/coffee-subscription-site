import styled from "styled-components"

export const Modalstyled = styled.div`
  .modal {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
  }
  .modal-content {
    position: absolute;
    display: flex;
    flex-direction: column;
    background-color: #fefcf7;
    width: 90%;
    border-radius: 8px;
    height: fit-content;
    h6 {
      font-family: "Fraunces", serif;
      font-size: 32px;
      font-weight: 900;
      line-height: 32px;
      letter-spacing: 0px;
      text-align: left;
      padding: 2rem 0;
      padding-left: 2rem;
      color: #ffffff;
      background-color: #333d4b;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }
    .content {
      font-family: "Fraunces", serif;
      font-size: 24px;
      font-weight: 900;
      line-height: 40px;
      letter-spacing: 0px;
      text-align: left;
      padding: 0 2rem;
      padding-top: 2rem;
      padding-bottom: 0.5rem;
      color: rgba(131, 136, 143, 1);
      .green {
        color: #0e8784;
      }
      .green:nth-of-type(5) {
        padding-left: 0.5rem;
      }
    }
    .extra {
      padding: 0 2rem;
      padding-bottom: 2rem;
      font-size: 14px;
      font-weight: 400;
      line-height: 30px;
      letter-spacing: 0px;
      text-align: left;
      color: rgba(51, 61, 75, 0.8);
    }
  }
  .overlay {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
  }
  .overlay {
    background-color: rgba(0, 0, 0, 0.5);
  }
  .main-btn {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 7rem;

    .btn {
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
      cursor: pointer;
    }
    .btn:hover {
      background-color: #66d2cf;
    }
  }
  .modal-btn {
    width: 100%;
    padding: 0 2rem;
    padding-bottom: 2rem;
    display: flex;
    justify-content: center;
    .checkout-btn {
      cursor: pointer;
      width: 100%;
      background-color: #0e8784;
      border: none;
      height: 56px;
      font-family: "Fraunces", serif;
      font-size: 18px;
      font-weight: 900;
      line-height: 25px;
      text-align: center;
      color: #fefcf7;
      border-radius: 6px;
    }
    .checkout-btn:hover {
      background-color: #66d2cf;
    }
    .tablet-display {
      display: none;
    }
  }
  body.active-modal {
    overflow-y: hidden;
  }

  @media screen and (min-width: 600px) and (max-width: 1023px) {
    .modal-content {
      width: 70%;
    }
    .modal-btn {
      justify-content: space-between;
      align-items: center;
      .tablet-display {
        display: block;
        font-family: "Fraunces", serif;
        font-size: 32px;
        font-weight: 900;
        line-height: 36px;
        letter-spacing: 0px;
        text-align: left;
        padding-top: 0.6rem;
      }
      .checkout-btn {
        width: 50%;
        span {
          display: none;
        }
      }
    }
  }

  @media screen and (min-width: 1024px) {
    .modal-content {
      width: 40%;
    }
    .modal-btn {
      justify-content: space-between;
      align-items: center;
      .tablet-display {
        display: block;
        font-family: "Fraunces", serif;
        font-size: 32px;
        font-weight: 900;
        line-height: 36px;
        letter-spacing: 0px;
        text-align: left;
        padding-top: 0.6rem;
      }
      .checkout-btn {
        width: 50%;
        span {
          display: none;
        }
      }
    }
    .main-btn {
      justify-content: flex-end;
      padding-right: 3rem;
    }
  }
`
