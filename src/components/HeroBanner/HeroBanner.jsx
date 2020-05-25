import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./Portfolio.css";

class HeroBanner extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* <div id="overlay"> */}
        {/* <div id="topHead"> */}
        {/* <nav>
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <ul>
                    <li>CJ</li>

                    <label htmlFor="" className="switch" onClick={this.slider}>
                      {this.state.darkMode ? (
                        <input type="checkbox" checked />
                      ) : (
                        <input type="checkbox" />
                      )}
                      <span className="slider round"></span>
                    </label>
                  </ul>
                </div>

                <div className="col-md-9">
                  <ul className="navButton">
                    <li>
                      {" "}
                      <a href="#about" className="activeButton">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#techUsed">Technology</a>
                    </li>
                    <li>
                      <a href="#myProjects">Projects</a>
                    </li>
                    <li>
                      <a href="k">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav> */}
        <div id="EntireBG">
          <div className="row">
            <div className="col" id="heroBanner">
              <h2>Front End Developer</h2>
              <span id="lineBreak"></span>
              <h1>CARLOS JARA</h1>
              <br />
              <div id="sloganContainer">
                <em id="testPlus" className="fas fa-angle-double-left"></em>
                <h4 className="ImperioH ">
                  {" "}
                  Design | Implement | Test | Optimize{" "}
                </h4>
                <em id="testPlus" className="fas fa-angle-double-right"></em>
              </div>
              <br />
              {/* <label htmlFor="" className="switch" onClick={this.slider}>
                      {this.state.darkMode ? (
                        <input type="checkbox" checked />
                      ) : (
                        <input type="checkbox" />
                      )}
                      <span className="slider round"></span>
                    </label> */}
            </div>
          </div>
        </div>
        {/* </nav> */}
        {/* </div> */}
      </React.Fragment>
    );
  }
}

export default HeroBanner;
