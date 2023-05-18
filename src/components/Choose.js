import React from "react";
import { Choosestyled } from "./styles/Choose.styled";

const Choose = ({ image, heading, text }) => {
  return (
    <Choosestyled>
      <div className="img">
        <img src={image} alt="" />
      </div>
      <div className="text">
        <h4>{heading}</h4>
        <p>{text}</p>
      </div>
    </Choosestyled>
  );
};

export default Choose;
