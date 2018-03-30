import React from 'react';

import me from './content/adam.jpg'
import github from './content/otherGithub.svg'
import linkedIn from './content/linkedInColour.svg'
import twitter from './content/twitterColour.svg'

import './css/about.css'
import './css/social.css'

class About extends React.Component {
  render(){
    return (
      <div className="About-container">
        <div className="About-img-container">
          <img
            className="About-img"
            src={me}
            alt="me"
          />
        </div>
        <div className="container">
          <div className="About-header">Welcome</div>
          <div className="About-body">
            I'm Adam. I try to make systems that make sense. <br/>
            <div className="About-media">
              <a href="https://github.com/AdamJackman" rel={'external'}>
                <div className="Media-item btn-github Media-github">
                  <img className="social-img" src={github} alt="GitHub" />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/adamjackman" rel={'external'}><div className="Media-item btn-facebook Media-linkedIn"><img className="social-img" src={linkedIn} alt="LinkedIn"/></div></a>

            </div>
            Below is a summary of the systems I have been working on so far. <br/>
          </div>
        </div>
      </div>
    )
  }
}
export default About;
