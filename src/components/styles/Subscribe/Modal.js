import React, { useState } from "react";
import { Modalstyled } from "./Modal.styled";

export default function Modal({ first, second, third, fourth, fifth }) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <Modalstyled>
      <div className="main-btn">
        <button onClick={toggleModal} className="btn">
          Create a plan!
        </button>
      </div>

      {modal && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}></div>
          <div className="modal-content">
            <h6>Order Summary</h6>
            <p className="content">
              “I drink my coffee as <span className="green">{first}</span>, with
              a <span className="green">{second}</span> type of bean.{" "}
              <span className="green">{third}</span> ground ala{" "}
              <span className="green">{fourth}</span>, sent to me
              <span className="green">{fifth}</span>.”
            </p>
            <p className="extra">
              Is this correct? You can proceed to checkout or go back to plan
              selection if something is off. Subscription discount codes can
              also be redeemed at the checkout.{" "}
            </p>
            <div className="modal-btn">
              <span className="tablet-display">$14.00 / mo</span>
              <button className="checkout-btn">
                Checkout<span> - $14.00 / mo</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </Modalstyled>
  );
}
