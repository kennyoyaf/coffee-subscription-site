import React from "react";
import promise from "../assets/Compromise.png";
import { Compromisestyled } from "../styles/Compromise.styled";

const Compromise = () => {
  return (
    <Compromisestyled>
      <img src={promise} alt="compromise" />
      <div className="text">
        <h4>Uncompromising quality</h4>
        <p>
          Although we work with growers who pay close attention to all stages of
          harvest and processing, we employ, on our end, a rigorous quality
          control program to avoid over-roasting or baking the coffee dry. Every
          bag of coffee is tagged with a roast date and batch number. Our goal
          is to roast consistent, user-friendly coffee, so that brewing is easy
          and enjoyable.
        </p>
      </div>
    </Compromisestyled>
  );
};

export default Compromise;
