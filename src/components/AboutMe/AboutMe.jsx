import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutMe.css";

class AboutMe extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div
          className="about"
          id="about"
          style={{ backgroundColor: `${this.props.backgroundColor}` }}
        >
          <div className="container" >
            <div className="row" style={{ color: `${this.props.fontColor}` }}>
              <div className="col-6">
                <div className="aboutFt">
                  <h1>Working on PROGRESS</h1>
                  <h2>not perfection</h2>
                </div>
              </div>
              <div className="col-6" id="verticalLine">
                <p>
                  <span id="emphasis">I</span> started my career in the medical insurace field providing
                  support to patients abroad and domestically. During that time, I saw the gap that technology
                  would bridge. Technology provides long term solutions to real
                  world problems. I also bring with me my love for art and
                  design. Web Developmet brings both art and critically thiking
                  into one field. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AboutMe;
