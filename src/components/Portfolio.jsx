import React from "react";
import "./Portfolio.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Portfolio extends React.Component {
  state = {
    darkMode: false,
    technology: [
      { id: 0, tech: "React", image: "https://bit.ly/2wChSvl", years: 1 },
      { id: 1, tech: "Javascript", image: "https://bit.ly/39eEoYk", years: 1 },
      { id: 2, tech: "HTML", image: "https://bit.ly/39nPDO1", years: 1 },
      { id: 3, tech: "CSS", image: "https://bit.ly/3bpnLul", years: 1 },
      { id: 4, tech: "SQL", image: "https://bit.ly/3ajqlCh", years: 1 },
      { id: 5, tech: "Illustrator", image: "https://bit.ly/2UkI6v6", years: 1 },
      { id: 6, tech: "Adobe XD", image: "https://bit.ly/39iCbv3", years: 1 },
    ],
    project: [
      { id: 0, name: "Imperio", image: "https://bit.ly/3amXZpW", stack: "React, HTML, CSS, C#, SQL",},
      { id: 1, name: "Task Tracker", image: "https://bit.ly/2KmRTeA", stack: "React, HTML, CSS",},
      { id: 2, name: "YumWise", image: "https://bit.ly/3bluZQy", stack: "HTML, CSS, JavaScript",},
      { id: 3, name: "AirBnB.Unique", image: "https://bit.ly/2VOgVbG", stack: "React, HTML, CSS, C#, SQL"},
    ],
  };

  slider = () => {
    this.setState((prevState) => ({
      darkMode: !prevState.darkMode,
    }));
  };

  render() {
    return (
      <React.Fragment>
        <div id="overlay">
          <div id="EntireBG">
            {/* <div id="topHead"> */}
            <nav>
              <div className="container">
                <div className="row">
                  <div className="col-md-3">
                    <ul>
                      <li>CJ</li>

                      <label
                        htmlFor=""
                        className="switch"
                        onClick={this.slider}
                      >
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
            </nav>
            {/* <div id="EntireBG"> */}
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
            {/* </div> */}
            {/* </nav> */}
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
                {this.state.technology.map((tech) => (
                  // <div className="col-sm-6 col-lg-4">
                  <div className="col-6">
                    <div className="card-default card" id="boderTech">
                      <div className="row">
                        <div className="col">
                          <div className="text-center card-body">
                            <h4 className="text-muted">{tech.id}</h4>
                            <h5 className="text-uppercase">{tech.tech}</h5>
                            <img
                              className=" mb-2 rounded-circle-thumb32"
                              src={tech.image}
                              alt="Tech"
                              id="techPhoto"
                            />
                            {/* <p>{profile.Description}</p> */}
                            <br />
                            <span>Years: {tech.years}</span>
                          </div>
                          {/* <div className="d-flex card-footer text-center">
               <h4>Footer Here</h4>
             </div> */}
                        </div>
                        {/* <div className="col-6">
            <h1> Hello</h1>
           </div> */}
                      </div>
                    </div>
                    <br />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* </div> */}

          {/* Projects */}
          <div className="myProjects">
            <h1>Projects</h1>
            <div className="container">
              <div className="row">
                {this.state.project.map(project => (
                <div className="col-6" key={project.id}>
                  <div className="card-default card">
                    
                    <div className="text-center card-body">
                        <h2>{project.name}</h2>
                        <span>Technology Used: {project.stack}</span>
                        <br/>
                      <img
                        src={project.image}
                        alt="Contact"
                        id="profilePhoto"
                      />
                    </div>
                    <div className="card-footer">
                      <div
                        className="btn-group btn-group-toggle"
                        data-toggle="buttons"
                      >
                        <label className="btn btn-secondary ">
                          <input
                            type="radio"
                            name="options"
                          />{" "}
                          PROJECT
                        </label>
                        <label className="btn btn-secondary ">
                          <input
                            type="radio"
                            name="options"
                          />{" "}
                          CODE
                        </label>
                        <label className="btn btn-secondary">
                          <input
                            type="radio"
                            name="options"
                          />{" "}
                          GIFs
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
               ))}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Portfolio;
