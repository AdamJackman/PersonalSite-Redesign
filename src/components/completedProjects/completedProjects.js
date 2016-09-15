import React from 'react'

import Project from '../project/project.js'

import './css/completedProjects.css'

class CompletedProjects extends React.Component {
  //render
  render(){
    return(
    <div className="CompletedProjects-section">
      <div className="CompletedProjects-container">
        <Project></Project>
        <Project></Project>
        <Project></Project>
      </div>
      <div className="CompleteProjects-titleContainer">
        <h1 className="CompletedProjects-title"> Projects </h1>
      </div>
      <div className="CompletedProjects-container">
        <Project></Project>
        <Project></Project>
        <Project></Project>
      </div>
    </div>
    )
  }
}
export default CompletedProjects;
