import React from 'react';

import me from './content/adam.jpg'
import github from './content/otherGithub.svg'
import linkedIn from './content/linkedInColour.svg'
import gmail from './content/gmail.svg'
import twitter from './content/twitterColour.svg'

import './css/about.css'
import './css/social.css'

class About extends React.Component {
  render(){
    return (
      <div className="About-container">
        <img
          className="About-img"
          src={me}
          alt="me"/>
        <div className="container">
          <div className="About-header">Welcome to my corner of the internet</div>
          <div className="About-body">
            This site exists to hold a portfolio of my current and on-going work.<br />
            I hope you enjoy your stay. Feel free to contact me with any questions or bugs.<br />
            <div className="About-media">
              <a href="https://github.com/AdamJackman" rel={'external'}><div className="Media-item btn-github Media-github"> <img className="social-img" src={github} alt="GitHub" /></div></a>
              <a href="https://www.linkedin.com/in/adamjackman" rel={'external'}><div className="Media-item btn-facebook Media-linkedIn"><img className="social-img" src={linkedIn} alt="LinkedIn"/></div></a>
              <a href="mailto:adamjackmandevelopment@gmail.com"><div className="Media-item btn-adn Media-email"><img className="social-img" src={gmail} alt="Gmail"/></div></a>
              <a href="https://twitter.com/adamdjackman" rel={'external'}><div className="Media-item btn-twitter Media-twitter"> <img className="social-img" src={twitter} alt="Twitter" /></div></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default About;
