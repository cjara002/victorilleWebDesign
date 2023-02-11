import React from "react";
import carlosPhoto from "../Helper/CarlosWallCropped.jpg";
import pdf from "./CarlosJaraResumeAprilResume.pdf";
import Zoom from "react-reveal/Zoom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutMe.css";

class AboutMe extends React.Component {
  render() {
    return (
      <>
        <div className="about text-muted" id="about">
          <div className="container">
            <div className="row">
              <Zoom right>
                <div className="col-lg-6 col-sm-12">
                  <h4 className="mb-3">About Me</h4>
                  <div className="aboutFt">
                    <h1>
                      I AM
                      <span id="aboutReel"> </span>
                    </h1>
                  </div>
                  <p className="aboutMeP">
                    <span id="emphasis">I</span> strive to provide quality work
                    by staying on top of deadlines, cooperating effectively with
                    my team, demonstrating flexibility, and resolving issues
                    that may hinder progress. I want to join a team that is
                    currently disrupting an industry.
                    <br />
                    <span id="emphasis">I</span> want to be in an environment
                    that can bring various challenges, as I know this will shape
                    who I am as a person and who I am as a developer.
                  </p>
                  <div className="overflow-hidden w-95 w-md-85 w-lg-80">
                    <button className="butn">
                      <a href={pdf} target="/" className="Resume">
                        View Resume{" "}
                      </a>{" "}
                    </button>
                  </div>
                </div>
              </Zoom>

              <Zoom left>
                <div className="col-lg-6 d-none d-sm-block" id="verticalLine">
                  <img
                    src={carlosPhoto}
                    alt="carlosPhoto"
                    className="carlosPhoto"
                  />
                </div>
              </Zoom>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AboutMe;
