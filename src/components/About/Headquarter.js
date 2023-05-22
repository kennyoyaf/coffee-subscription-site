import React from "react";
import Country from "./Country";
import { country } from "../assets/data";
import { Headquarterstyled } from "../styles/Headquarter.styled";

const Headquarter = () => {
  return (
    <Headquarterstyled>
      <h3>Our headquarters</h3>
      <div className="country">
        {country.map((item, i) => (
          <Country key={i} {...item} />
        ))}
      </div>
    </Headquarterstyled>
  );
};

export default Headquarter;
