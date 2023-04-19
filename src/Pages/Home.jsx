import React from "react";
import Jumbotron from "../components/Jumbotron";
import Why from "../components/Why";
import Order from "../components/Order";
import SingleCollection from "../components/SingleCollection";
import { Container } from "../components/styles/Container.styled";
import { collection } from "../components/assets/data";
import Background from "../components/assets/Background-1.jpg";

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
        />
        {collection.map((item, i) => (
          <SingleCollection key={i} {...item} />
        ))}
        <Why />
        <Order />
      </Container>
    </>
  );
};

export default Home;
