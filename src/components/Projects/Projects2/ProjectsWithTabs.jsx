import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProjectsWithTabs.css";
import { TabContent, TabPane, Row, Col } from "reactstrap";


const ProjectsWithTabs = (props) => (
  <React.Fragment>
      <TabContent activeTab={props.activeTab}>
        {props.project.type === "web" ?
        <TabPane tabId="1">
            <Row>
              <Col>
                <br />
                <div className="col">
                  <div className="card">
                    <div className="row">
                        <div className="col-7">
                        <img src={props.project.image} className="img-responsive container" alt="Project Example"/>
                        </div>
                          
                      <div className="col-5">
                        <div className="p-3">
                          <h1>
                            <strong>{props.project.name}</strong>
                          </h1>
                          <p>
                            <span className="text-lg">Technology:</span>{" "}
                            {props.project.stack}
                          </p>
                          <p>{props.project.description}</p>
                          <div className="float-center">
                            <div
                              className="btn-group btn-group-toggle"
                              data-toggle="buttons"
                            >
                              {props.project.code === null ? (
                                ""
                              ) : (
                                <label className="btn btn-secondary">
                                  <a
                                    id="projectLinks"
                                    type="radio"
                                    name="options"
                                    href={props.project.project}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    PROJECT
                                  </a>
                                </label>
                              )}

                              {props.project.code === null ? (
                                ""
                              ) : (
                                <label className="btn btn-secondary ">
                                  <a
                                    id="projectLinks"
                                    type="radio"
                                    name="options"
                                    href={props.project.code}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    CODE
                                  </a>
                                </label>
                              )}

                              {props.project.video === null ? (
                                ""
                              ) : (
                                <label className="btn btn-secondary">
                                  <a
                                    id="projectLinks"
                                    type="radio"
                                    name="options"
                                    href={props.project.video}
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
                    </div>
                  </div>
                </div>
                <br />
              </Col>
            </Row>
        </TabPane>
         : 
        <TabPane tabId="2">
            <Row>
              <Col>
                {/* mobile apps here */}
                <br />
                <div className="col">
                  <div className="card">
                    {/* this row is messing up my image */}
                    <div className="row">
                    <div className="col-7">
                        <img src={props.project.image} class="img-responsive container" alt="Project Example"/>
                        </div>

                      <div className="col-5">
                        <div className="p-3">
                          <h1>
                            <strong>{props.project.name}</strong>
                          </h1>
                          <p>
                            <span className="text-lg">Technology:</span>{" "}
                            {props.project.stack}
                          </p>
                          <p>{props.project.description}</p>
                          <div className="float-center">
                            <div
                              className="btn-group btn-group-toggle"
                              data-toggle="buttons"
                            >
                              {props.project.code === null ? (
                                ""
                              ) : (
                                <label className="btn btn-secondary">
                                  <a
                                    id="projectLinks"
                                    type="radio"
                                    name="options"
                                    href={props.project.project}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    PROJECT
                                  </a>
                                </label>
                              )}

                              {props.project.code === null ? (
                                ""
                              ) : (
                                <label className="btn btn-secondary ">
                                  <a
                                    id="projectLinks"
                                    type="radio"
                                    name="options"
                                    href={props.project.code}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    CODE
                                  </a>
                                </label>
                              )}

                              {props.project.video === null ? (
                                ""
                              ) : (
                                <label className="btn btn-secondary">
                                  <a
                                    id="projectLinks"
                                    type="radio"
                                    name="options"
                                    href={props.project.video}
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
                    </div>
                  </div>
                </div>
                <br />
              </Col>
            </Row>
        </TabPane>
}
      </TabContent>
    </React.Fragment>
  // );
);

export default ProjectsWithTabs;
