import React from "react";
import { Boxstyled } from "../styles/Subscribe/Box.styled";

const Box = ({ heading, text, handleClick }) => {
  return (
    <Boxstyled onClick={() => handleClick(heading)} className="content">
      <h6>{heading}</h6>
      <p>{text}</p>
    </Boxstyled>
  );
};

export default Box;
