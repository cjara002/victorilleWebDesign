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
            <div className="container">
              <div className="row">
                <div className="col" id="heroBanner">
                  <div id="heroValuesContainer">
                    <h3 className="heroValues">Come and Explore my</h3>
                  </div>
                  <h1>WEB DESIGNS</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HeroBanner;
