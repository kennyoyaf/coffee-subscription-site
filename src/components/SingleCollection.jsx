import React from "react";
import { SingleCollectionstyled } from "./styles/SingleCollection.styled";

const SingleCollection = ({ image, heading, text }) => {
  return (
    <SingleCollectionstyled>
      <img src={image} alt="" />
      <h4>{heading}</h4>
      <p>{text}</p>
    </SingleCollectionstyled>
  );
};

export default SingleCollection;
