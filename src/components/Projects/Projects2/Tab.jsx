import React from "react";
import { TabPane, Row, Col } from "reactstrap";
import Fade from "react-reveal/Fade";

const Tab = (props) => {
return(
    <>
    <TabPane tabId={props.project.type === "web" ? "1" : "2"}>
            <Row>
              <Fade>
                <Col>
                  <div className="col">
                    <div className="card">
                      <div className="row">
                        <div className="col-7 d-none d-sm-block">
                          <img
                            src={props.project.image}
                            className="img-responsive container"
                            alt="Project Example"
                          />
                        </div>

                        <div className="col-lg-5 col-sm-12">
                          <div className="p-3">
                            <h1 className="projectName">
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
                                {props.project.project === null ? (
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
              </Fade>
            </Row>
          </TabPane>
    </>
)
}

export default Tab;