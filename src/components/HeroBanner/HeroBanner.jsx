import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HeroBanner.css";

class HeroBanner extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div
          style={{
            backgroundImage: `url(${this.props.backgroundImage})`,
            backgroundPosition: "center",
          }}
        >
          <div className="row">
            <div
              className="col"
              id="heroBanner"
              style={{ color: `${this.props.fontColor}` }}
            >
              <h2>Front End Developer</h2>
              <span id="lineBreak"></span>
              <h1>CARLOS JARA</h1>
              <br />
              <div id="heroValuesContainer">
                <em id="heroArrow" className="fas fa-angle-double-left"></em>
                <h4 className="heroValues">
                  {" "}
                  Design | Implement | Test | Optimize{" "}
                </h4>
                <em id="heroArrow" className="fas fa-angle-double-right"></em>
              </div>
              <br />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HeroBanner;
