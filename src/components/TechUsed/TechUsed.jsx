import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./Portfolio.css";

class TechUsed extends React.Component {
  state = {
    technology: [
      { id: 0, tech: "React", image: "https://bit.ly/2wChSvl", years: 1 },
      { id: 1, tech: "Javascript", image: "https://bit.ly/39eEoYk", years: 1 },
      { id: 2, tech: "HTML", image: "https://bit.ly/39nPDO1", years: 1 },
      { id: 3, tech: "CSS", image: "https://bit.ly/3bpnLul", years: 1 },
      { id: 4, tech: "SQL", image: "https://bit.ly/3ajqlCh", years: 1 },
      { id: 5, tech: "Illustrator", image: "https://bit.ly/2UkI6v6", years: 1 },
      { id: 6, tech: "Adobe XD", image: "https://bit.ly/39iCbv3", years: 1 },
      { id: 7, tech: "C#", image: "https://bit.ly/2BNbiER", years: 1 },
      { id: 8, tech: "React Native", image: "https://bit.ly/39MNzRv", years: 1 },
      { id: 9, tech: "PostMan", image: "https://bit.ly/39OQIAn", years: 1 },
      { id: 10, tech: "Git", image: "https://bit.ly/30gNpi9", years: 1 },
      { id: 11, tech: "Redux", image: "https://bit.ly/2BLVORm", years: 1 },

    ],
  };

  render() {
    return (
      <React.Fragment>
        <div
          className="techUsed"
          id="techUsed"
          style={{
            backgroundImage: `url(${this.props.backgroundImage})`,
            color: `${this.props.fontColor}`,
          }}
        >
          <div className="container">
            <h1>Technology</h1>
            <div className="row">
              {this.state.technology.map((tech) => (
                // <div className="col-sm-6 col-lg-4">
                <div className="col-6">
                  <div className="card-default card" id="boderTech">
                    <div className="row">
                      <div className="col">
                        <div className="text-center card-body">
                          <h4 className="text-muted">{tech.id}</h4>
                          <h5 className="text-uppercase">{tech.tech}</h5>
                          <img
                            className=" mb-2 rounded-circle-thumb32"
                            src={tech.image}
                            alt="Tech"
                            id="techPhoto"
                          />
                          {/* <p>{profile.Description}</p> */}
                          <br />
                          <span>Years: {tech.years}</span>
                        </div>
                        {/* <div className="d-flex card-footer text-center">
               <h4>Footer Here</h4>
             </div> */}
                      </div>
                      {/* <div className="col-6">
            <h1> Hello</h1>
           </div> */}
                    </div>
                  </div>
                  <br />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* </div> */}
      </React.Fragment>
    );
  }
}

export default TechUsed;
