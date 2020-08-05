import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Projects.css";
import expierence from "./Projects";

class Projects extends React.Component {
  state = {
    project: []
  };

  componentDidMount(){
    this.setState(() => ({
      project: expierence
    }));
  }

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
          <h1>Projects</h1>
          <div className="container">
            <div className="row">
              {this.state.project.map((project) => (
                <div className="col-6" key={project.id}>
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
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Projects;
