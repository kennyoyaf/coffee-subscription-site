import React from "react";
import { Listenstyled } from "./styles/Listen.styled";
import { list } from "./assets/data";
import Works from "../components/Works";

const Listen = ({ textcolor }) => {
  return (
    <Listenstyled>
      {list.map((item, i) => (
        <Works key={i} {...item} textcolor={textcolor} />
      ))}
    </Listenstyled>
  );
};

export default Listen;
