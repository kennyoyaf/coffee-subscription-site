import React from "react";
import { Subscribestyled } from "../components/styles/Subscribe/Subscribe.styled";
import Jumbotron from "../components/Jumbotron";
import Subscribebg from "../components/assets/Background-3.jpg";

const Subscribe = () => {
  return (
    <Subscribestyled>
      <Jumbotron
        heading="Create a plan"
        text="Build a subscription plan that best fits your needs. We offer an assortment of the best 
        artisan coffees from around the globe delivered fresh to your door."
        background={Subscribebg}
      />
    </Subscribestyled>
  );
};

export default Subscribe;
