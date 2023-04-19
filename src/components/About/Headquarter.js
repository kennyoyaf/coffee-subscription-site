import React from "react";
import Country from "./Country";
import { country } from "../assets/data";
import { Headquarterstyled } from "../styles/Headquarter.styled";

const Headquarter = () => {
  return (
    <Headquarterstyled>
      <h3>Our headquarters</h3>
      {country.map((item, i) => (
        <Country key={i} {...item} />
      ))}
    </Headquarterstyled>
  );
};

export default Headquarter;
