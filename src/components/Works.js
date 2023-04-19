import React from "react";
import { Workstyled } from "./styles/Work.styled";

const Works = ({ number, heading, text }) => {
  return (
    <Workstyled>
      <h2>0{number}</h2>
      <h4>{heading}</h4>
      <p>{text}</p>
    </Workstyled>
  );
};

export default Works;
