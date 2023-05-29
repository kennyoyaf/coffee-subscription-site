import React, { useState } from "react";
import { Subscribestyled } from "../components/styles/Subscribe/Subscribe.styled";
import Jumbotron from "../components/Jumbotron";
import Subscribebg from "../components/assets/Background-3.jpg";
import Modal from "../components/styles/Subscribe/Modal";
import Order from "../components/Order";
import { Routes, Route } from "react-router-dom";
import HowCoffee from "../components/Subscribe/HowCoffee";
import TypeCoffe from "../components/Subscribe/TypeCoffe";
import HowMuch from "../components/Subscribe/HowMuch";
import WantGrind from "../components/Subscribe/WantGrind";
import OftenDeliver from "../components/Subscribe/OftenDeliver";
import lgbackground from "../components/assets/subscribelgbackground.png";
import Subscribetabbackground from "../components/assets/Subscribetabbackground.jpg";

const Subscribe = () => {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  const [fourth, setFourth] = useState("");
  const [fifth, setFifth] = useState("");

  const handleData = (dat, type) => {
    switch (type) {
      case "first":
        setFirst(dat);
        break;
      case "second":
        setSecond(dat);
        break;
      case "third":
        setThird(dat);
        break;
      case "fourth":
        setFourth(dat);
        break;
      case "fifth":
        setFifth(dat);
        break;

      default:
        break;
    }
  };
  return (
    <Subscribestyled>
      <Jumbotron
        heading="Create a plan"
        text="Build a subscription plan that best fits your needs. We offer an assortment of the best 
        artisan coffees from around the globe delivered fresh to your door."
        background={Subscribebg}
        lgbackground={lgbackground}
        tabbackground={Subscribetabbackground}
      />
      <Order bgcolor="#2C343E" textcolor="#ffffff" />
      <div className="total-accordion">
        <div className="detail">
          <a href="#one">
            <span>01</span> Preferences
          </a>
          <hr />
          <a href="#two">
            <span>02</span> Bean Type
          </a>
          <hr />
          <a href="#three">
            <span>03</span> Quantity
          </a>
          <hr />
          <a href="#four">
            <span>04</span> Grind Option
          </a>
          <hr />
          <a href="#five">
            <span>05</span> Deliveries
          </a>
        </div>
        <div className="delivery">
          <HowCoffee handleData={handleData} />
          <TypeCoffe handleData={handleData} />
          <HowMuch handleData={handleData} />
          <WantGrind handleData={handleData} />
          <OftenDeliver handleData={handleData} />
        </div>
      </div>

      <div className="new">
        <div className="summary">
          <h6>Order Summary</h6>
          <p>
            “I drink my coffee as <span className="green">{first}</span>, with a{" "}
            <span className="green">{second}</span> type of bean.{" "}
            <span className="green">{third}</span> ground ala{" "}
            <span className="green">{fourth}</span>, sent to me
            <span className="green">{fifth}</span>.”
          </p>
        </div>
      </div>

      <Modal
        first={first}
        second={second}
        third={third}
        fourth={fourth}
        fifth={fifth}
      />
    </Subscribestyled>
  );
};

export default Subscribe;
