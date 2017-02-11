import React from 'react';

import Header from '../header/header.js'
import About from '../about/about.js'
import CompletedProjects from '../completedProjects/completedProjects.js'
import CurrentWork from '../currentWork/currentWork.js'

import './css/app.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <CompletedProjects />
        <CurrentWork />
      </div>
    );
  }
}
export default App;
