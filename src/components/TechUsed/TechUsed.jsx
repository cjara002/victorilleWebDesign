import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import expierence from "./Technology";
import "./TechUsed.css";
import Roll from "react-reveal/Roll";

class TechUsed extends React.Component {
  state = {
    techUsed: [],
  };

  componentDidMount() {
    this.setState(() => ({
      techUsed: expierence,
    }));
  }

  render() {
    return (
      <React.Fragment>
        <div
          className="techUsed"
          id="techUsed"
          style={{
            backgroundImage: `url(https://bit.ly/2yJf9Ba})`,
            color: `white`,
          }}
        >
          <div className="container">
            <h1>Technology</h1>
            <br />
            <div className="row">
              {this.state.techUsed.map((tech) => (
                <Roll top>
                  <div className="col-4">
                    <div className="card-default card" id="borderTech">
                      <div className="row">
                        <div className="col">
                          <div className="text-center card-body">
                            <img
                              className=" mb-2 rounded-circle-thumb32"
                              src={tech.image}
                              alt="Tech"
                              id="techPhoto"
                            />
                            <h5 className="text-uppercase" id="techTitle">
                              {tech.tech}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                  </div>
                </Roll>
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TechUsed;
