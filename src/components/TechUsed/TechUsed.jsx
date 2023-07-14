import React from "react";
import images from "../Helper/Images.js";
import expierence from "../Helper/Technology";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TechUsed.css";

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
      <>
      <div className="screen-height"> 
        <div
          className="techUsed item bg-img h-100 cover-background"
          data-overlay-dark="6"
          id="techUsed"
          style={{
            backgroundImage: `url(${images.londonNight})`,
            color: `white`,
            backgroundSize: 'cover'
          }}
        >
          <div className="container">
            <h1 className="mb-5">Skills</h1>
            <div className="row">
              {this.state.techUsed.map((tech) => (
                  <div className="col-4">
                    <div className="card-default card" id="borderTech">
                      <div className="row">
                        <div className="col">
                          <div className="text-center card-body">
                            <img
                              className="mb-2 rounded-circle-thumb32"
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
              ))}
            </div>
          </div>
        </div>
        </div>
      </>
    );
  }
}

export default TechUsed;
