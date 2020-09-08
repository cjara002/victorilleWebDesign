import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutMe.css";
import Zoom from "react-reveal/Zoom";

class AboutMe extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div
          className="about"
          id="about"
          style={{ backgroundColor: `${this.props.backgroundColor}` }}
        >
          <div className="container">
            <div className="row" style={{ color: `${this.props.fontColor}` }}>
              <Zoom right>
                <div className="col-6">
                  <div className="aboutFt">

                    <h1>I AM 
                      <br />
                    <span id="aboutReel"> </span>
                    </h1>

                  </div>
                </div>
              </Zoom>
              <div className="col-6" id="verticalLine">
              <Zoom left>
                <p>
                  {/* <span id="emphasis">I</span> started my career in the medical
                  field providing support to patients abroad and
                  domestically. During that time, I saw the gap that technology
                   bridged. Technology provides long term solutions to real
                  world problems.
                  I also bring with me my love for art and
                  design. Web Development brings both art and critically thinking
                  into one field. */}

                  <span id="emphasis">I</span> strive to provide quality work by staying on top of deadlines, cooperating effectively with my team, demonstrating flexibility, and resolving issues that may hinder progress. I want to join a team that is currently disrupting an industry. I want to be in an environment that can bring various challenges, as I know this will shape who I am as a person and who I am as a developer. Just like with Imperio, it brings me great joy to tackle and solve real-world problems.
                </p>
                </Zoom>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AboutMe;
