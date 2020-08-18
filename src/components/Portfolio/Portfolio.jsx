import AboutMe from "../AboutMe/AboutMe";
import ContactForm from "../ContactMe/ContactForm";
import HeroBanner from "../HeroBanner/HeroBanner";
import TechUsed from "../TechUsed/TechUsed.jsx";
import React from "react";
import Projects from "../Projects/Projects.jsx";
import "./Portfolio.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Portfolio extends React.Component {
  state = {
    darkMode: false,
  };

  componentDidMount() {
    const ColorMode = JSON.parse(localStorage.getItem("darkMode"));
    if (ColorMode) {
      this.setDarkMode();
    } else {
      localStorage.setItem("darkMode", JSON.stringify(this.state.darkMode));
    }
  }

  slider = () => {
    this.setState((prevState) => ({
      darkMode: !prevState.darkMode,
    }));
    localStorage.setItem("darkMode", JSON.stringify(!this.state.darkMode));
    console.log("slider:", this.state.darkMode);
  };

  setDarkMode = () => {
    const ColorMode = JSON.parse(localStorage.getItem("darkMode"));
    this.setState(() => ({
      darkMode: ColorMode,
    }));
  };
  render() {
    return (
      <React.Fragment>
        <nav id="navOverEverything">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <ul>
                  {/* <li>
                     CJ 
                    </li> */}
                  <li>
                    <a href="https://www.carlosjaraportfolio.com/"> CJ </a>
                  </li>
                  {/* Need to figure out how to tur the circle black once it is clicked. */}
                </ul>
              </div>

              <div className="col-md-9">
                <ul className="navButton">
                  <li>
                    {" "}
                    <a href="#about">About</a>
                    {/* {window.screen.height < 600 ? <a href="#about">short </a>: <a href="#about">About</a>} */}
                  </li>
                  <li>
                    <a href="#techUsed">Technology</a>
                  </li>
                  <li>
                    <a href="#myProjects">Recent Work</a>
                  </li>
                  <li>
                    <a href="#formBorder">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <HeroBanner
          backgroundImage={
            this.state.darkMode === true
              ? "https://bit.ly/3exjLtv"
              : "https://bit.ly/2MeFTfS"
          }
          fontColor={this.state.darkMode === true ? "white" : "black"}
        />

        <AboutMe
          backgroundColor={this.state.darkMode === true ? "black" : "white"}
          fontColor={this.state.darkMode === true ? "white" : "black"}
        />

        <TechUsed
          backgroundImage={
            this.state.darkMode === true
              ? "https://bit.ly/2XfVthC"
              : "https://bit.ly/2yJf9Ba"
          }
          fontColor={this.state.darkMode === true ? "white" : "white"}
        /> 

        <Projects
          backgroundColor={this.state.darkMode === true ? "black" : "white"}
          fontColor={this.state.darkMode === true ? "white" : "black"}
        />

        <ContactForm /> 
      </React.Fragment>
    );
  }
}

export default Portfolio;
