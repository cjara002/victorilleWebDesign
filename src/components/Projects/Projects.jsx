import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Projects.css";
import TransitionGroup from "react-transition-group/TransitionGroup";
import Fade from "react-reveal/Fade";

class Projects extends React.Component {
  state = {
    groupProps: {
      appear: false,
      enter: true,
      exit: true,
    },
    project: [
      {
        id: 0,
        name: "AirBnB.Unique",
        image: "https://bit.ly/2VOgVbG",
        stack: "React, Redux, HTML, CSS, C#, SQL",
        project: "https://cjara002.github.io/AirBnB.Unique/",
        code: "https://github.com/cjara002/AirBnB.Unique",
        video: null,

      },
      {
        id: 1,
        name: "Task Tracker",
        image: "https://bit.ly/2KmRTeA",
        stack: "React, HTML, CSS",
        project: "https://cjara002.github.io/taskTracker/",
        code: "https://github.com/cjara002/taskTracker",
        video: "https://www.youtube.com/watch?v=xRKpxHlh3uY&list=PLvzQZBo6Tz-uIF9SPoqN52B6I49r4w5eC",
      },
      {

        id: 2,
        name: "Imperio",
        image: "https://bit.ly/3amXZpW",
        stack: "React, HTML, CSS, C#, SQL",
        project: null,
        code: null,
        video: "https://www.youtube.com/watch?v=nuJpoidFZRg&list=PLvzQZBo6Tz-s0wj61cuZW_ijhAAl--ir4",
      },
    ]
  };


  render() {
    return (
      <React.Fragment>
        <div
          className="myProjects"
          id="myProjects"
          style={{
            background: `${this.props.backgroundColor}`,
            color: `${this.props.fontColor}`,
          }}
        >
          <h1>Recent Work</h1>
          <div className="container">
            <div className="row">
              <TransitionGroup {...this.state.groupProps}>
              
              {this.state.project.map((project) => (
                  <Fade key={project.id}> 
                <div className="col" >
                  <div className="card-default card" id="cardBottomBorder">
                    <div
                      className="text-center card-body"
                      style={{
                        background: `${this.props.backgroundColor}`,
                      }}
                    >
                      <h2 id ="projectTitle">{project.name}</h2>
                      <span id= "techStack">Technology Used: {project.stack}</span>
                      <br />
                      <br />
                      <img
                        src={project.image}
                        alt="projectImage"
                        id="projectPhoto"
                      />
                    </div>
                    <div
                      className="card-footer"
                      style={{
                        background: `${this.props.backgroundColor}`,
                      }}
                    >
                      <div
                        className="btn-group btn-group-toggle"
                        data-toggle="buttons"
                      >
                        <label
                          className="btn btn-secondary "
                        >
                          <a
                            id="projectLinks"
                            type="radio"
                            name="options"
                            href={project.project}
                          >
                              {project.code === null ? "N/A" : "PROJECT "}
                          </a>
                        </label>

                        <label className="btn btn-secondary ">
                          <a
                            // style={{ decoration: "none" }}
                            id="projectLinks"
                            type="radio"
                            name="options"
                            href={project.code}
                          >
                            {project.code === null ? "N/A" : "CODE "}
                          </a>
                        </label>
                        <label className="btn btn-secondary">
                          <a
                            // style={{ decoration: "none" }}
                            id="projectLinks"
                            type="radio"
                            name="options"
                            href={project.video}
                          >
                            {project.video === null ? "N/A" : "YOUTUBE "}
                          </a>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                </Fade>
              ))}
              </TransitionGroup>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Projects;
