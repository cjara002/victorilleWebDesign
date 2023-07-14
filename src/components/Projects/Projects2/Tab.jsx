import React from "react";
import { TabPane, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

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
                        <p>
                          <span className="text-lg">Technology:</span>{" "}
                          {props.project.stack}
                        </p>
                        <p>{props.project.description}</p>
                        <div className="float-center">

                          <button className="butn">
                            <Link to={`/details/${props.project.id}`} className="Resume">View More</Link>
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
