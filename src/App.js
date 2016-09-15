import React from 'react';

import Header from './components/header/header.js'
import CompletedProjects from './components/completedProjects/completedProjects.js'

import './App.css';
/**
* The one page no router dream
*/
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CompletedProjects></CompletedProjects>
      </div>
    );
  }
}
export default App;
