import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Portfolio from "./components/Portfolio/Portfolio";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Portfolio />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
