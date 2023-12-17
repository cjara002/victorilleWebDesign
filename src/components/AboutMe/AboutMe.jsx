import React from "react";
import VWI from "../Helper/images/victorvilleWebInnovations.png"
import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutMe.css";

class AboutMe extends React.Component {
  render() {
    return (
      <>
        <div className="about text-muted" id="about">
          <div className="container">
            <div className="row">
                <div className="col-lg-6 col-sm-12">
                  <h4 className="mb-3">Why Victorville Web Innovations?</h4>
                  {/* <div className="aboutFt">
                    <h1>
                      I AM
                      <span id="aboutReel"> </span>
                    </h1>
                  </div> */}
                  <p className="aboutMeP">
                    <span id="emphasis">We</span> speclize in making an online presence for small to mid size businesses.
                    <br />
                    <span id="emphasis">We</span> try to keep you in mind be providing:
                    <br />
                    <br />
                    <ul>
                      <li>Cost effective solutions - tired of paying monthly for Wordpress? Let me host your site on Netlify.</li>
                      <li>Speed and performance - my static sites use the latest technology to provide a seemless experience for your customers.</li>
                      <li>Customization and branding - all sites are white labels. Slap your logo and colors to our site.</li>
                      <li>SEO and Visibility - lets not only attract more people to your site, but the bring the right kind of customers.</li>
                    </ul>
                  </p>
                  <div className="overflow-hidden w-95 w-md-85 w-lg-80">
                    <button className="butn">
                        Free stuff? Ask me, you never know!
                    </button>
                  </div>
                </div>

                <div className="col-lg-6 d-none d-sm-block" id="verticalLine">
                  <img
                    src={VWI}
                    alt="Victorville Web Innovations"
                    className="carlosPhoto"
                  />
                </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AboutMe;
