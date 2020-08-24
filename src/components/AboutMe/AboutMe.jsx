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
                    <h1>Working on PROGRESS</h1>
                    <h2>not perfection</h2>
                  </div>
                </div>
              </Zoom>
              <div className="col-6" id="verticalLine">
              <Zoom left>
                <p>
                  <span id="emphasis">I</span> started my career in the medical
                  field providing support to patients abroad and
                  domestically. During that time, I saw the gap that technology
                   bridged. Technology provides long term solutions to real
                  world problems.
                  I also bring with me my love for art and
                  design. Web Development brings both art and critically thinking
                  into one field.
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
