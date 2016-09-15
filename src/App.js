import React from 'react';

import Header from './components/header/header.js'
import About from './components/about/about.js'
import CompletedProjects from './components/completedProjects/completedProjects.js'
import CurrentWork from './components/currentWork/currentWork.js'

import './App.css';
/**
* The one page no router dream
*/
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
