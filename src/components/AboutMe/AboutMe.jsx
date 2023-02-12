import React from "react";
import carlosPhoto from "../Helper/CarlosWallCropped.jpg";
import pdf from "../Helper/CarlosJaraResume2023.pdf";
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
                    <span id="emphasis">I</span> am a full-stack developer who constantly challenges myself both
                     in work and in my personal life. I have a passion for cooking, app development, and home renovation
                     projects. Additionally, I have been playing tennis for over 10 years and have honed my skills with a
                    heavy topspin forehand.
                    <br />
                    <br />
                    <span id="emphasis">Currently,</span> I am expanding my knowledge by learning LINQ, AWS, and how to use
                     Google Sheets for budgeting. I have a goal to build a shed in my backyard in the near future.
                  </p>
                  <div className="overflow-hidden w-95 w-md-85 w-lg-80">
                    <button className="butn">
                      <a href={pdf} target="/" download className="Resume">
                        Download Resume{" "}
                      </a>{" "}
                    </button>
                  </div>
                </div>
              </Zoom>

              <Zoom left>
                <div className="col-lg-6 d-none d-sm-block" id="verticalLine">
                  <img
                    src={carlosPhoto}
                    alt="Profile of Carlos Jara"
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
