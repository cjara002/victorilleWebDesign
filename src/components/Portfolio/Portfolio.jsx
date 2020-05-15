import AboutMe from "../AboutMe/AboutMe";
import HeroBanner from "../HeroBanner/HeroBanner";
import TechUsed from "../TechUsed/TechUsed";
import React from "react";
import Projects from "../Projects/Projects";
import "./Portfolio.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Portfolio extends React.Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div id="overlay">
          <HeroBanner />
          <AboutMe />
          <TechUsed />
          <Projects />
        </div>
      </React.Fragment>
    );
  }
}

export default Portfolio;
