import React from "react";
import { boxData } from "../assets/data";
import Box from "./Box";

const HowMuch = ({ handleData }) => {
  const handleClick = (data) => {
    handleData(data, "third");
  };
  return (
    <div>
      <h4>How much would you like?</h4>
      {boxData.slice(6, 9).map((theBox, i) => (
        <Box key={i} {...theBox} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default HowMuch;
