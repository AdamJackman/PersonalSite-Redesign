import React from 'react'

import logo from '../../logo.svg'

import './css/project.css'

class Project extends React.Component {
  //render
  render(){
    return(
      <div className="Project-box">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Project-text">
          <div className="Project-header"> Sample Project </div>
          <div className="Project-body"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
        </div>
      </div>
    )
  }
}
export default Project;
