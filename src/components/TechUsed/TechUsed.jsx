import React from "react";
import creditCard from "../Helper/images/creditcard.jpg";
import expierence from "../Helper/Stats.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TechUsed.css";

class TechUsed extends React.Component {
  state = {
    stats: [],
  };

  componentDidMount() {
    this.setState(() => ({
      stats: expierence,
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
            backgroundImage: `url(${creditCard})`,
            color: `white`,
            backgroundSize: 'cover'
          }}
        >
          <div className="container">
            <h1 className="mb-5">Consumer Research Habits</h1>
            <div className="row">
              {this.state.stats.map((stat) => (
                  <div className="col-4">
                    <div className="card-default card" id="borderTech">
                      <div className="row">
                        <div className="col">
                          <div className="text-center card-body">
                            <img
                              className="mb-2 rounded-circle-thumb32"
                              // src={tech.image}
                              alt="Tech"
                              id="techPhoto"
                            />
                            <h5 className="text-uppercase" id="techTitle">
                              {stat.title}
                            </h5>
                            <p>{stat.description}</p>
                            <p>{stat.percent}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                  </div>
              ))}
            </div>
                          <h3>according to: </h3>
            <a href="https://www.zippia.com/advice/small-business-website-statistics/"> Zippia</a>
          </div>
        </div>
        </div>
      </>
    );
  }
}

export default TechUsed;
