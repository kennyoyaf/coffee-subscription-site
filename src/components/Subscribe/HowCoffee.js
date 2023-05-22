import React from "react";
import { boxData } from "../assets/data";
import Box from "./Box";

const HowCoffee = ({ handleData }) => {
  const handleClick = (data) => {
    handleData(data, "first");
  };

  return (
    <div>
      <h4>How do you drink your coffee?</h4>
      {boxData.slice(0, 3).map((theBox, i) => (
        <Box key={i} {...theBox} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default HowCoffee;
