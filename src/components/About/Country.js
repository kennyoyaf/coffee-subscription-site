import React from "react";
import { Countrystyled } from "../styles/Country.styled";

const Country = ({ image, country, address, city, postnumber, number }) => {
  return (
    <Countrystyled>
      <img src={image} alt="" />
      <h2>{country}</h2>
      <p>{address}</p>
      <p>{city}</p>
      <p>{postnumber}</p>
      <p>{number}</p>
    </Countrystyled>
  );
};

export default Country;
