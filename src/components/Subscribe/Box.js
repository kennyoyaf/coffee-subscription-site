import React from "react";

const Box = ({ heading, text, handleClick }) => {
  return (
    <div onClick={() => handleClick(heading)}>
      <h6>{heading}</h6>
      <p>{text}</p>
    </div>
  );
};

export default Box;
