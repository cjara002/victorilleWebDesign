import React from "react";
import Portfolio from "./components/Portfolio/Portfolio";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends React.Component {
  render() {
    return (
        <div className="main-wrapper">
          <div className="appDark">
            <Portfolio />
          </div>
        </div>
    );
  }
}

export default App;
