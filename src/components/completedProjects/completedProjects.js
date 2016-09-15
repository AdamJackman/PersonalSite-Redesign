import React from 'react'

import Project from '../project/project.js'

import './css/completedProjects.css'

class CompletedProjects extends React.Component {
  //render
  render(){
    return(
    <div>
      <div className="CompletedProjects-container">
        <Project></Project>
        <Project></Project>
        <Project></Project>
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
