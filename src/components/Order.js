import React from "react";
import { Orderstyled } from "./styles/Order.styled";
import line from "./assets/line.svg";
import Listen from "./Listen";

const Order = ({ button, bgcolor, h5 }) => {
  return (
    <Orderstyled bgcolor={bgcolor}>
      {h5 ? <h5>{h5}</h5> : null}
      <svg
        width="497"
        height="31"
        viewBox="0 0 497 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15 16H481" stroke="#FDD6BA" stroke-width="2" />
        <circle
          cx="15.5"
          cy="15.5"
          r="14.5"
          fill="#FEFCF7"
          stroke="#0E8784"
          stroke-width="2"
        />
        <circle
          cx="248.5"
          cy="15.5"
          r="14.5"
          fill="#FEFCF7"
          stroke="#0E8784"
          stroke-width="2"
        />
        <circle
          cx="481.5"
          cy="15.5"
          r="14.5"
          fill="#FEFCF7"
          stroke="#0E8784"
          stroke-width="2"
        />
      </svg>
      <Listen />
      {button ? <button>{button}</button> : null}
    </Orderstyled>
  );
};

export default Order;
