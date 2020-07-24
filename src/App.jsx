import React from "react";
import "./App.css";
import Portfolio from "./components/Portfolio/Portfolio";

class App extends React.Component {
  state = {
    darkMode: false,
  };

  componentDidMount() {
    const ColorMode = JSON.parse(localStorage.getItem("darkMode"));
    if (ColorMode) {
      this.setDarkMode();
    } else {
      localStorage.setItem("darkMode", JSON.stringify(this.state.darkMode));
    }
  }

  setDarkMode = () => {
    const ColorMode = JSON.parse(localStorage.getItem("darkMode"));
    this.setState(() => ({
      darkMode: ColorMode,
    }));
  };

  render() {
    return (
      <React.Fragment>
        <div
             className= {this.state.darkMode === true ? "AppDark" : "AppLight"}
        >
          <Portfolio triggerDarkMode={this.setDarkMode} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
