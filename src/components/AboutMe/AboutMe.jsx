import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutMe.css";
import Zoom from "react-reveal/Zoom";
import carlosPhoto from "./CarlosWallCropped.jpg";
import pdf from "./CarlosJaraWebDeveloper.pdf";

class AboutMe extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="about text-muted" id="about">
          <div className="container">
            <div className="row">
              <Zoom right>
                <div className="col-6">
                  <h4>About Me</h4>
                  <div className="aboutFt">
                    <h1>
                      I AM
                      <span id="aboutReel"> </span>
                    </h1>
                  </div>
                  <p>
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
                  <div>
                    <button className="btn btn-secondary">
                      <a href={pdf} target="/" className="Resume">
                        View Resume{" "}
                      </a>{" "}
                    </button>
                  </div>
                </div>
              </Zoom>

              <Zoom left>
                <div className="col-6" id="verticalLine">
                  <img
                    src={carlosPhoto}
                    alt="carlosPhoto"
                    className="carlosPhoto"
                  />
                  {/* <div>
                    <button className="btn btn-secondary">
                      <a href={pdf} target="/" className="Resume">
                        Resume{" "}
                      </a>{" "}
                    </button>
                  </div> */}

                  {/* <h1>About Me</h1> */}
                  {/* <p>
                    <span id="emphasis">I</span> strive to provide quality work
                    by staying on top of deadlines, cooperating effectively with
                    my team, demonstrating flexibility, and resolving issues
                    that may hinder progress. I want to join a team that is
                    currently disrupting an industry. I want to be in an
                    environment that can bring various challenges, as I know
                    this will shape who I am as a person and who I am as a
                    developer. Just like with Imperio, it brings me great joy to
                    tackle and solve real-world problems.
                  </p> */}
                </div>
              </Zoom>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AboutMe;
