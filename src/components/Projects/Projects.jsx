import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./Portfolio.css";

class Projects extends React.Component {
  state = {
    project: [
      {
        id: 0,
        name: "Imperio",
        image: "https://bit.ly/3amXZpW",
        stack: "React, HTML, CSS, C#, SQL",
        project: "https://imperiotech.azurewebsites.net/",
        code: null,
      },
      {
        id: 1,
        name: "Task Tracker",
        image: "https://bit.ly/2KmRTeA",
        stack: "React, HTML, CSS",
        project: "https://cjara002.github.io/taskTracker/",
        code: "https://github.com/cjara002/taskTracker",
        GIFs: "https://media.giphy.com/media/mGcOrK9F3RO9CdfK6L/source.mp4",
      },
      {
        id: 2,
        name: "YumWise",
        image: "https://bit.ly/3bluZQy",
        stack: "HTML, CSS, JavaScript",
        project: "https://cjara002.github.io/JSQuiz/",
        code: "https://github.com/cjara002/JSQuiz",
      },
      {
        id: 3,
        name: "AirBnB.Unique",
        image: "https://bit.ly/2VOgVbG",
        stack: "React, HTML, CSS, C#, SQL",
        project: "https://cjara002.github.io/AirBnB.Unique/",
        code: "https://github.com/cjara002/AirBnB.Unique",
      },
    ],
  };

  render() {
    return (
      <React.Fragment>
        {/* Projects */}
        <div className="myProjects">
          <h1>Projects</h1>
          <div className="container">
            <div className="row">
              {this.state.project.map((project) => (
                <div className="col-6" key={project.id}>
                  <div className="card-default card">
                    <div className="text-center card-body">
                      <h2>{project.name}</h2>
                      <span>Technology Used: {project.stack}</span>
                      <br />
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
                        <label
                          className="btn btn-secondary "
                          // href={project.project}
                        >
                          {/* <input type="radio" name="options" /> PROJECT */}
                          <a
                            // style={{ decoration: "none" }}
                            id="projectA"
                            type="radio"
                            name="options"
                            href={project.project}
                          >
                            PROJECT
                          </a>
                        </label>
                        <label className="btn btn-secondary ">
                          <a
                            // style={{ decoration: "none" }}
                            id="projectA"
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
                            id="projectA"
                            type="radio"
                            name="options"
                            href={project.GIFs}
                          >
                            YOUTUBE
                          </a>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Projects;
