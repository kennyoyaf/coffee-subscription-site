import React from "react";
import Commit from "../components/About/Commit";
import Jumbotron from "../components/Jumbotron";
import Compromise from "../components/About/Compromise";
import { Aboutstyled } from "../components/styles/About.styled";
import Headquarter from "../components/About/Headquarter";
import Aboutbg from "../components/assets/Background-2.jpg";
import Abouttabbackground from "../components/assets/Abouttabbackground.jpg";
import lgbackground from "../components/assets/Aboutlgbackground.png";

function About() {
  return (
    <Aboutstyled>
      <Jumbotron
        heading="About Us"
        text="Coffeeroasters began its journey of exotic discovery in 1999, 
        highlighting stories of coffee from around the world. 
        We have since been dedicated to bring the perfect cup - 
        from bean to brew - in every shipment."
        background={Aboutbg}
        lgbackground={lgbackground}
        tabbackground={Abouttabbackground}
      />
      <Commit />
      <Compromise />
      <Headquarter />
    </Aboutstyled>
  );
}

export default About;
