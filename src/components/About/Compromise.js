import React from "react";
import promise from "../assets/Compromise.png";
import promise2 from "../assets/Compromise-2.png";
import { Compromisestyled } from "../styles/Compromise.styled";

const Compromise = () => {
  return (
    <Compromisestyled>
      <div className="text">
        <div className="img">
          <img src={promise} alt="compromise" className="mobile" />
          <img src={promise2} alt="compromise2" className="desktop" />
        </div>
        <div className="new">
          <h4>Uncompromising quality</h4>
          <p>
            Although we work with growers who pay close attention to all stages
            of harvest and processing, we employ, on our end, a rigorous quality
            control program to avoid over-roasting or baking the coffee dry.
            Every bag of coffee is tagged with a roast date and batch number.
            Our goal is to roast consistent, user-friendly coffee, so that
            brewing is easy and enjoyable.
          </p>
        </div>
      </div>
    </Compromisestyled>
  );
};

export default Compromise;
