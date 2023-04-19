import React from "react";
import Choose from "./Choose";
import { box } from "./assets/data";
import { Whystyled } from "./styles/Why.styled";

const Why = () => {
  return (
    <Whystyled>
      <h2>Why choose us?</h2>
      <p>
        A large part of our role is choosing which particular coffees will be
        featured in our range. This means working closely with the best coffee
        growers to give you a more impactful experience on every level.
      </p>
      {box.map((item, i) => (
        <Choose key={i} {...item} />
      ))}
    </Whystyled>
  );
};

export default Why;
