import React from 'react'
import Project from '../project/project.js'

import './css/completedProjects.css'

const pos1Title = "Personal Website";
const pos1Text = "You are on it! Created with ES6 React.js (utilizing react-scripts). No bootstrap, No materialize, Just normal CSS.";
const pos1Git = "https://github.com/AdamJackman/PersonalSite-Redesign";
import pos1Img from '../../logo.svg'
const pos2Title = "Braille Printer";
const pos2Text = "I made a fully functional Braille Printer with 2 other guys from UofT. It won first place for our capstone project";
const pos2Git = "https://github.com/AdamJackman/BraillePrinter";
import pos2Img from './content/braille.jpg'
const pos3Title = "Seeds";
const pos3Text = "I do a lot of personal projects. I've been making seeds to bootstrap new projects on a good stack.";
const pos3Git = "https://github.com/AdamJackman/Finagle-Postgres-Slick-3.1-Seed";
import pos3Img from './content/github.jpg';
const pos4Title = "Password Manager";
const pos4Text = "It creates strong reuseable site specific passwords from a simple input. Doesn't even need to save a hashed password";
const pos4Git = "https://github.com/AdamJackman/OnePassword";
import pos4Img from './content/oneWord.jpg'
const pos5Title = "RIP Grooveshark";
const pos5Text = "Chrome extension to track songs that would periodically get silently removed from your Grooveshark playlists.";
const pos5Git = "https://github.com/AdamJackman/RIPgrooveshark";
import pos5Img from './content/ripapp.png'
const pos6Title = "TLA";
const pos6Text = "Personal project used to automate business specific logic and tedious tasks. Made my development team much more efficient.";
import pos6Img from './content/TLA.png'

class CompletedProjects extends React.Component {
  //render
  render(){
    return(
    <div className="CompletedProjects-section">
      <div className="CompletedProjects-container">
        <Project pos={1} title={pos1Title} content={pos1Text} img={pos1Img} git={pos1Git}/>
        <Project pos={2} title={pos2Title} content={pos2Text} img={pos2Img} git={pos2Git}/>
        <Project pos={3} title={pos3Title} content={pos3Text} img={pos3Img} git={pos3Git}/>
      </div>
      <div className="CompleteProjects-titleContainer">
        <h1 className="CompletedProjects-title"> Projects </h1>
      </div>
      <div className="CompletedProjects-container">
        <Project pos={4} title={pos4Title} content={pos4Text} img={pos4Img} git={pos4Git}/>
        <Project pos={5} title={pos5Title} content={pos5Text} img={pos5Img} git={pos5Git}/>
        <Project pos={6} title={pos6Title} content={pos6Text} img={pos6Img}/>
      </div>
    </div>
    )
  }
}
export default CompletedProjects;
