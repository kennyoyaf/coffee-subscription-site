import React from "react";
import { collection } from "./assets/data";
import { Singlestyled } from "./styles/Single.styled";
import SingleCollection from "./SingleCollection";

const Single = () => {
  return (
    <Singlestyled>
      {collection.map((item, i) => (
        <SingleCollection key={i} {...item} />
      ))}
    </Singlestyled>
  );
};

export default Single;
