import React from "react";
import { Orderstyled } from "./styles/Order.styled";
import line from "./assets/line.svg";
import Listen from "./Listen";

const Order = ({ button, bgcolor, h5, textcolor, img }) => {
  return (
    <Orderstyled bgcolor={bgcolor} img={img}>
      {h5 ? <h5>{h5}</h5> : null}
      {img ? <img>{img}</img> : null}
      <Listen textcolor={textcolor} />
      {button ? <button>{button}</button> : null}
    </Orderstyled>
  );
};

export default Order;
