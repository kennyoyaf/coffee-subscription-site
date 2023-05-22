import React from "react";
import { boxData } from "../assets/data";
import Box from "./Box";

const OftenDeliver = ({ handleData }) => {
  const handleClick = (data) => {
    handleData(data, "fifth");
  };
  return (
    <div>
      <h4>How often should we deliver?</h4>
      {boxData.slice(12, 15).map((theBox, i) => (
        <Box key={i} {...theBox} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default OftenDeliver;
