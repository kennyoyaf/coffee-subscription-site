import React from "react";
import { Choosestyled } from "./styles/Choose.styled";

const Choose = ({ image, heading, text }) => {
  return (
    <Choosestyled>
      <div className="box">
        <img src={image} alt="" />
        <h4>{heading}</h4>
        <p>{text}</p>
      </div>
    </Choosestyled>
  );
};

export default Choose;
