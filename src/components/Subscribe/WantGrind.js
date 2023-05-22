import React from "react";
import { boxData } from "../assets/data";
import Box from "./Box";

const WantGrind = ({ handleData }) => {
  const handleClick = (data) => {
    handleData(data, "fourth");
  };
  return (
    <div>
      <h4>Want us to grind them?</h4>
      {boxData.slice(9, 12).map((theBox, i) => (
        <Box key={i} {...theBox} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default WantGrind;
