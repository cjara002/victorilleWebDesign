import React from "react";
import "./Portfolio.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Portfolio extends React.Component {
  state = {
    darkMode: false,
    technology: [
      { id: 0, tech: "React" },
      { id: 1, tech: "Javascript" },
      { id: 2, tech: "HTML" },
      { id: 3, tech: "CSS" },
      { id: 4, tech: "SQL" }
    ]
  };

  slider = () => {
    this.setState(prevState => ({
      darkMode: !prevState.darkMode
    }));
  };

  render() {
    return (
      <React.Fragment>
        <div id="overlay">
          <div id="EntireBG">
            <div id="topHead">
              <div className="container">
                <div className="row">
                  <div className="col-md-3">
                    <ul>
                      <li>CJ</li>
                    </ul>
                  </div>
                  <div className="col-md-9">
                    <ul className="navButton">
                      <li>
                        {" "}
                        <a href="k" className="activeButton">
                          About
                        </a>
                      </li>
                      <li>
                        <a href="k">Technology</a>
                      </li>
                      <li>
                        <a href="k">Projects</a>
                      </li>
                      <li>
                        <a href="k">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
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
                    <em
                      id="testPlus"
                      className="fas fa-angle-double-right"
                    ></em>
                  </div>
                  <br />=
                  <label htmlFor="" className="switch" onClick={this.slider}>
                    {this.state.darkMode ? (
                      <input type="checkbox" checked />
                    ) : (
                      <input type="checkbox" />
                    )}
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="about">
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
                    medical field. During that time, I saw the gap that
                    technology would bridge. I work to provide long term
                    solutions to real world problems. I also bring with me my
                    love for art and design. Web Developmet brings both art and
                    critically thiking into one field. Right now my favorite
                    technologies are React, JavaScript, CSS , and HTML.
                  </p>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>

          <div className="techUsed">
            <div className="container">
              <h1>Technology</h1>

              <div className="row">
                <div className="col-sm-6 col-lg-4">
                  <div className="row">
                    <div className="col-12">
                      <div className="text-center card-body">
                        <h4 className="text-muted">01</h4>
                        <h5>REACT</h5>
                        <img
                          className=" mb-2 rounded-circle-thumb32"
                          // src={profile.userImage}
                          alt="Tech"
                          id="profilePhoto"
                        />
                        {/* <p>{profile.Description}</p> */}
                       <br/>
                        <span>Years: 1</span>
                      </div>
                      <div className="d-flex card-footer text-center">
                        <h4>Footer Here</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </React.Fragment>
    );
  }
}

export default Portfolio;
