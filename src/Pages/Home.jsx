import React from "react";
import Jumbotron from "../components/Jumbotron";
import Why from "../components/Why";
import Order from "../components/Order";
import { Container } from "../components/styles/Container.styled";
import lgbackground from "../components/assets/Homelgbackground.png";
import Background from "../components/assets/Background-1.jpg";
import line from "../components/assets/line.svg";
import tabbackground from "../components/assets/Hometabbackground.jpg";
import Single from "../components/Single";

const Home = () => {
  return (
    <>
      <Container>
        <Jumbotron
          heading="Great coffee made simple."
          text="Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule."
          button="Create your plan"
          background={Background}
          lgbackground={lgbackground}
          tabbackground={tabbackground}
          img={line}
        />
        <h3>our collection</h3>
        <Single />
        <Why />
        <Order h5="How it works" button="Create your plan" />
      </Container>
    </>
  );
};

export default Home;
