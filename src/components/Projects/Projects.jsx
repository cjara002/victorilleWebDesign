import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Projects.css";
import TransitionGroup from "react-transition-group/TransitionGroup";
import Fade from "react-reveal/Fade";

class Projects extends React.Component {
  state = {
    groupProps: {
      appear: true,
    },
    project: [
      {
        id: 0,
        name: "AirBnB.Unique",
        image: "https://bit.ly/2VOgVbG",
        description: "A website were an AirBnB host can find  a reliable, local cleaner.",
        stack: "React, Redux, HTML, CSS, C#, SQL",
        project: "https://cjara002.github.io/AirBnB.Unique/",
        code: "https://github.com/cjara002/AirBnB.Unique",
        video: null,
      },
      {
        id: 1,
        name: "Task Tracker",
        image: "https://bit.ly/2KmRTeA",
        description: "Keep track of your tasks for the day. You're one task away from greatness.",
        stack: "React, HTML, CSS",
        project: "https://cjara002.github.io/taskTracker/",
        code: "https://github.com/cjara002/taskTracker",
        video:
          "https://www.youtube.com/watch?v=xRKpxHlh3uY&list=PLvzQZBo6Tz-uIF9SPoqN52B6I49r4w5eC",
      },
      {
        id: 2,
        name: "Imperio",
        image: "https://bit.ly/3amXZpW",
        description: "A LMS that helps entrepreneurs with advice, insight and prowerful guidance.",
        stack: "React, HTML, CSS, C#, SQL",
        project: null,
        code: null,
        video:
          "https://www.youtube.com/watch?v=nuJpoidFZRg&list=PLvzQZBo6Tz-s0wj61cuZW_ijhAAl--ir4",
      },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <div
          className="myProjects"
          id="myProjects"
        >
          <h1 id="sectionTitle">Recent Work</h1>
          <div className="container">
            <div className="row">
              <TransitionGroup {...this.state.groupProps}>
                {this.state.project.map((project) => (
                  <Fade key={project.id}>
                    <div className="col">
                      <div className="card-default card" id="cardBottomBorder">
                        <div
                          className="text-center card-body"
                        >
                          <h2 id="projectTitle">{project.name}</h2>
                          <span id="techStack">
                            Technology Used: {project.stack}
                          </span>
                         <div id="projectImageContainer">
                            <img
                              src={project.image}
                              alt="projectImage"
                              id="projectPhoto"
                            />
                            <div id="projectInnerDetails"> 
                              <span id="details">
                                {project.description}
                              </span>
                            </div>
                         </div>
                        </div>
                        <div
                          className="card-footer"
                        >
                          <div
                            className="btn-group btn-group-toggle"
                            data-toggle="buttons"
                          >
                            {project.code === null ? (
                              ""
                            ) : (
                              <label className="btn btn-secondary ">
                                <a
                                  id="projectLinks"
                                  type="radio"
                                  name="options"
                                  href={project.project}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  PROJECT
                                </a>
                              </label>
                            )}

                            {project.code === null ? (
                              ""
                            ) : (
                              <label className="btn btn-secondary ">
                                <a
                                  id="projectLinks"
                                  type="radio"
                                  name="options"
                                  href={project.code}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  CODE
                                </a>
                              </label>
                            )}

                            {project.video === null ? (
                              ""
                            ) : (
                              <label className="btn btn-secondary">
                                <a
                                  id="projectLinks"
                                  type="radio"
                                  name="options"
                                  href={project.video}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  VIDEO
                                </a>
                              </label>
                            )}
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
