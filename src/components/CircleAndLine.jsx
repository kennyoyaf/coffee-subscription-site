import React from "react";
import { circleIcon } from "./assets/icon";
import CircleAndLineStyled from "./styles/CircleAndLineStyled";

const CircleAndLine = () => {
  return (
    <CircleAndLineStyled>
      {circleIcon()}
      <div className="line"></div>
      {circleIcon()}
      <div className="line"></div>
      {circleIcon()}
    </CircleAndLineStyled>
  );
};

export default CircleAndLine;
