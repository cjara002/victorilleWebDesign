import React from "react";

const ProblemAndApproach = (props) => {
    return(
        <div className="text-muted" id="about" style={{margin: 40}}>
        <div className="container">
          <div className="row">

          <div className="col-lg-4 col-sm-12">
                <h4 className="mb-3"> 
                <em className="fas fa-plus"/>
                 <span className="ml-2">The Goal </span>
                </h4>
               {props.goal}
                <div className="overflow-hidden w-95 w-md-85 w-lg-80">
                </div>
              </div>

              <div className="col-lg-4 col-sm-12" id="verticalLine">
                <h4 className="mb-3"> 
                <em className="fas fa-exclamation"/>
                 <span className="ml-2">The Problem </span>
                </h4>
                {props.problem}
                <div className="overflow-hidden w-95 w-md-85 w-lg-80">
                </div>
              </div>

              <div className="col-lg-4 col-sm-12" id="verticalLine">
                <h4 className="mb-3">
                <em className="fas fa-check"/>
                <span className="ml-2">The Approach </span>
                    </h4>
{props.approach}
                <div className="overflow-hidden w-95 w-md-85 w-lg-80">
                </div>
              </div>
          </div>
        </div>
      </div>
    )
}

export default ProblemAndApproach;