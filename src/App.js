import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    console.log("panda is alive");
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to PandaScript</h1>
          <h1>Impressum</h1>
          <p>Thanh Le</p>
          <p>Schwetzingenstr. 10</p>
          <p>81243 Muenchen</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
