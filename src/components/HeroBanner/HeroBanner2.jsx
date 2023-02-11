import React from "react";
import images from "../Helper/Images.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HeroBanner.css";

class HeroBanner extends React.Component {
  render() {
    return (
      <>
        <div className="screen-height">
          <div
            className="item bg-img h-100 cover-background"
            data-overlay-dark="6"
            style={{
              backgroundImage: `url(${images.lion})`,
            }}
            id="heroBGPhoto"
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
      </>
    );
  }
}

export default HeroBanner;
