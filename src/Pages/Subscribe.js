import React from "react";
import { Subscribestyled } from "../components/styles/Subscribe/Subscribe.styled";
import Accordion from "../components/Subscribe/Accordion";
import Jumbotron from "../components/Jumbotron";
import Subscribebg from "../components/assets/Background-3.jpg";
import Order from "../components/Order";
import Summary from "../components/Subscribe/Summary";
import { useState } from "react";
import { delivery } from "../components/assets/data";

const Subscribe = () => {
  const [change, setChange] = useState(delivery);
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <Subscribestyled>
      <Jumbotron
        heading="Create a plan"
        text="Build a subscription plan that best fits your needs. We offer an assortment of the best 
        artisan coffees from around the globe delivered fresh to your door."
        background={Subscribebg}
      />
      <Order bgcolor="#2C343E" />
      <div className="total-accordion">
        <div className="detail">
          <p>
            <span>01</span> Preferences
          </p>
          <hr />
          <p>
            <span>02</span> Bean Type
          </p>
          <hr />
          <p>
            <span>03</span> Quantity
          </p>
          <hr />
          <p>
            <span>04</span> Grind Option
          </p>
          <hr />
          <p>
            <span>05</span> Deliveries
          </p>
        </div>
        <div className="delivery">
          {delivery.map((item, i) => (
            <Accordion key={i} {...item} handleClick={handleClick} />
          ))}
        </div>
      </div>
      <Summary delivery={change} />
      <div className="main-btn">
        <button>Create my plan!</button>
      </div>
    </Subscribestyled>
  );
};

export default Subscribe;
