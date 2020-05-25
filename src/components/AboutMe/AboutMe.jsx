import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./Portfolio.css";

class AboutMe extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="about" id="about">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <div className="aboutFt">
                  <h1>WORKING ON PROGRESS</h1>
                  <h2>NOT PERFECTION</h2>
                </div>
              </div>
              <div className="col-6" id="verticalLine">
                <p>
                  <span id="emphasis">I</span> started my career providing
                  support to patients abroad and domestically. I worked in the
                  medical field. During that time, I saw the gap that technology
                  would bridge. I work to provide long term solutions to real
                  world problems. I also bring with me my love for art and
                  design. Web Developmet brings both art and critically thiking
                  into one field. Right now my favorite technologies are React,
                  JavaScript, CSS , and HTML.
                </p>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AboutMe;
