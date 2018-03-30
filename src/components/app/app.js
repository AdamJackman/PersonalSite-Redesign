import React from 'react';

import Header from '../header/header.js'
import About from '../about/about.js'
import CompletedProjects from '../completedProjects/completedProjects.js'
import CurrentWork from '../previousWork/previousWork.js'
import PreviousWork from '../previousWork/previousWork.js'

import './css/app.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <CompletedProjects />
        <CurrentWork />
        <PreviousWork />
      </div>
    );
  }
}
export default App;
