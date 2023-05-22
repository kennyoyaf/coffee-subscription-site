import React from "react";
import { boxData } from "../assets/data";
import Box from "./Box";

const TypeCoffe = ({ handleData }) => {
  const handleClick = (data) => {
    handleData(data, "second");
  };

  return (
    <div>
      <h4>What type of coffee?</h4>
      {boxData.slice(3, 6).map((theBox, i) => (
        <Box key={i} {...theBox} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default TypeCoffe;
