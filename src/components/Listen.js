import React from "react";
import { Listenstyled } from "./styles/Listen.styled";
import { list } from "./assets/data";
import Works from "../components/Works";

const Listen = () => {
  return (
    <Listenstyled>
      {list.map((item, i) => (
        <Works key={i} {...item} textcolor="#ffffff" />
      ))}
    </Listenstyled>
  );
};

export default Listen;
