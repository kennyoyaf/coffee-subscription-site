import React from "react";
import { Separatestyled } from "./styles/Separate.styled";
import Choose from "../components/Choose";
import { box } from "./assets/data";

const Separate = () => {
  return (
    <Separatestyled>
      {box.map((item, i) => (
        <Choose key={i} {...item} />
      ))}
    </Separatestyled>
  );
};

export default Separate;
