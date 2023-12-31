import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HeroBanner.css";

class HeroBanner extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="screen-height">
          <div
            className="item bg-img h-100 cover-background"
            data-overlay-dark="6"
            style={{
              backgroundImage: `url(${"https://bit.ly/2MeFTfS"})`,
            }}
            id="HeroBGPhoto"
          >
            <div className="row">
              {/* <div className="col-1"></div> */}
              <div className="col-6" id="heroBanner">
                {/* <h1>CARLOS JARA</h1> */}
                <div id="heroValuesContainer">
                  <em id="heroArrow" className="fas fa-angle-double-left"></em>
                  <h4 className="heroValues"> Web | Mobile | Design </h4>
                  <em id="heroArrow" className="fas fa-angle-double-right"></em>
                </div>
                <h1>City of Angeles</h1>
              </div>
              {/* <div className="col-6"></div> */}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HeroBanner;
