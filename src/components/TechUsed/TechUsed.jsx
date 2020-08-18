import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import expierence from "./Technology";
import "./TechUsed.css";

class TechUsed extends React.Component {
  state = {
    techUsed: [ ],
  };

  componentDidMount() {
    this.setState(() => ({
      techUsed: expierence
    }));
    }

  render() {
    return (
      <React.Fragment>
        <div
          className="techUsed"
          //using for menu
          id="techUsed"
          style={{
            backgroundImage: `url(${this.props.backgroundImage})`,
            color: `${this.props.fontColor}`,
          }}
        >
          <div className="container">
            <h1>Technology</h1>
            <div className="row">
              {this.state.techUsed.map((tech) => (
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
                          <h4 className="text-muted">{tech.id}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                </div>
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TechUsed;