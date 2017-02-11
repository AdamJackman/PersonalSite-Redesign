import React from 'react'
import Project from '../project/project.js'

import './css/completedProjects.css'

// If I ever add a reasonable backend server these will be responded by the backend
const pos1Title = "Personal Website";
const pos1Text = "You’re on it! Written and developed in React.js this site holds my portfolio. I recently added Docker to allow easy redeploys.";
const pos1Git = "https://github.com/AdamJackman/PersonalSite-Redesign";
import pos1Img from '../../logo.svg'
const pos2Title = "Braille Printer";
const pos2Text = "Created a fully functional Braille printer for a fraction of the cost of on market alternatives. Won first place in the UofT capstone project. (2015)";
const pos2Git = "https://github.com/AdamJackman/BraillePrinter";
import pos2Img from './content/braille.jpg'
const pos3Title = "Seeds";
const pos3Text = "Flexible project seeds help bootstrap new creations. I build seeds to avoid unnecessary work in the future.";
const pos3Git = "https://github.com/AdamJackman/Finagle-Postgres-Slick-3.1-Seed";
import pos3Img from './content/github.jpg';
const pos4Title = "Password Manager";
const pos4Text = "My first personal project. A chrome extension that transforms your 1 password into a unique password for each website you visit.";
const pos4Git = "https://github.com/AdamJackman/OnePassword";
import pos4Img from './content/oneWord.jpg'
const pos5Title = "RIP Grooveshark";
const pos5Text = "Chrome extension that tracked grooveshark playlists. Detected and alerted of missing (flagged) songs.";
const pos5Git = "https://github.com/AdamJackman/RIPgrooveshark";
import pos5Img from './content/ripapp.png'
const pos6Title = "TLA";
const pos6Text = "AHK Hotkey project with inbuilt business logic for Paymentus. Significantly enhances efficiency of development team.";
import pos6Img from './content/TLA.png'

class CompletedProjects extends React.Component {
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
