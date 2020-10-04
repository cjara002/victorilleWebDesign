import React from "react";
import "./App.css";
import Portfolio from "./components/Portfolio/Portfolio";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="AppLight">
          <Portfolio />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
