import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Initial version of app</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <h2>add h2 functionality</h2>
          <h3>add h3 functionality</h3>
          <button>New feature</button>
          <a target="_blank" href="https://www.google.com">
            Link to google
          </a>
        </header>
      </div>
    );
  }
}

export default App;
