import React from "react";
import { SingleCollectionstyled } from "./styles/SingleCollection.styled";

const SingleCollection = ({ image, heading, text }) => {
  return (
    <SingleCollectionstyled>
      <div className="img">
        <img src={image} alt="" />
      </div>
      <div className="text">
        <h4>{heading}</h4>
        <p>{text}</p>
      </div>
    </SingleCollectionstyled>
  );
};

export default SingleCollection;
