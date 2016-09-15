import React from 'react'
import Project from '../project/project.js'

import './css/completedProjects.css'

const pos1Title = "Personal Website";
const pos1Text = "You are on it! Created with ES6 React.js. No bootstrap. No materialize. Just my css.";
import pos1Img from '../../logo.svg'
const pos2Title = "Braille Printer";
const pos2Text = "I made a Braille Printer with 2 other guys from UofT. It won first place for our capstone project";
import pos2Img from '../../logo.svg'
const pos3Title = "Seeds";
const pos3Text = "I do a lot of personal projects. I've been making seeds to bootstrap new projects on a good stack.";
import pos3Img from '../../logo.svg'
const pos4Title = "TLA";
const pos4Text = "Personal project scripting business specific logic. Made my development team much more efficient.";
import pos4Img from '../../logo.svg'
const pos5Title = "Password Manager";
const pos5Text = "It creates strong reuseable site specific passwords from a simple input. Doesn't even need to save a hashed password";
import pos5Img from '../../logo.svg'
const pos6Title = "RIP Grooveshark";
const pos6Text = "Chrome extension to track songs that would periodically get silently removed from your Grooveshark playlists.";
import pos6Img from '../../logo.svg'

class CompletedProjects extends React.Component {
  //render
  render(){
    return(
    <div className="CompletedProjects-section">
      <div className="CompletedProjects-container">
        <Project pos={1} title={pos1Title} content={pos1Text} img={pos1Img}></Project>
        <Project pos={2} title={pos2Title} content={pos2Text} img={pos2Img}></Project>
        <Project pos={3} title={pos3Title} content={pos3Text} img={pos3Img}></Project>
      </div>
      <div className="CompleteProjects-titleContainer">
        <h1 className="CompletedProjects-title"> Projects </h1>
      </div>
      <div className="CompletedProjects-container">
        <Project pos={4} title={pos4Title} content={pos4Text} img={pos4Img}></Project>
        <Project pos={5} title={pos5Title} content={pos5Text} img={pos5Img}></Project>
        <Project pos={6} title={pos6Title} content={pos6Text} img={pos6Img}></Project>
      </div>
    </div>
    )
  }
}
export default CompletedProjects;
