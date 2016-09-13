import React from 'react';
import logo from './logo.svg';

import CompletedProjects from './components/completedProjects/completedProjects.js'

import './App.css';
/**
* The one page no router dream
*/
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <CompletedProjects></CompletedProjects>
      </div>
    );
  }
}
export default App;
