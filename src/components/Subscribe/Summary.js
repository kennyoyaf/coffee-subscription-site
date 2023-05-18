import React from "react";

import { Summarystyled } from "../styles/Subscribe/Summary.styled";

const Summary = ({ delivery }) => {
  return (
    <Summarystyled>
      <h6>Order Summary</h6>
      <p>
        “I drink my coffee as <span></span>, with a <span></span> type of bean.{" "}
        <span></span> ground ala
        <span></span>, sent to me <span></span>.”
      </p>
    </Summarystyled>
  );
};

export default Summary;
