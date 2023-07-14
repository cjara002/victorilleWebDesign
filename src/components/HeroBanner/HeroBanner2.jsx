import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HeroBanner.css";

const HeroBanner = (props) => {
  console.log("HeroBanner:", props.heroBannerText)
    return (
      <>
        <div className="screen-height">
          <div
            className="item bg-img h-100 cover-background"
            data-overlay-dark="6"
            style={{
              backgroundImage: `url(${props && props.image})`,
            }}
            id="heroBGPhoto"
          >
            <div className="container">
              <div className="row">
               {props && props.heroBannerText}
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default HeroBanner;
