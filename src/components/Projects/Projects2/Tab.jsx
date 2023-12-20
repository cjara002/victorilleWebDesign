import React from "react";
import { TabPane, Row, Col } from "reactstrap";
// import { Link } from "react-router-dom";

const Tab = (props) => {
  return (
    <>
      <TabPane tabId={props.project.type === "web" ? "1" : "2"}>
        <Row>
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
                        <p>{props.project.description}</p>
                        <div className="float-center" >
                            {props.project.isActive? 
                                                    <button className="butn" style={{ marginRight: '10px' }}>
                                                    <a  target="_blank" rel="noopener noreferrer" href={props.project.project}>View Demo</a>
                                                  </button>
                            :  ""}
                          <button className="butn-secondary">
                            <a  target="_blank" rel="noopener noreferrer" href={props.project.project}>Free consultaion</a>
                          </button>
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
    </>
  );
};

export default Tab;
