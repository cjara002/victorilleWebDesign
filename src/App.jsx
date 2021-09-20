import React from "react";
import "./App.css";
import Portfolio from "./components/Portfolio/Portfolio";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="main-wrapper">
          <div className="AppLight">
            <Portfolio />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
