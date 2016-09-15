import React from 'react';

import me from './content/portrait.png'

import './css/about.css'
import './css/bootstrap-social.css'

class About extends React.Component {
  constructor() {
    super();
    this.state = {secret: false};
  };
  handleClick() {
   this.setState({secret: !this.state.secret});
  };
  render(){
    return (
      <div className="About-container">
        <img
          className={this.state.secret? "About-img secret": "About-img"}
          src={me}
          onClick={this.handleClick.bind(this)}
          alt="me"/>
        <div className="container">
          <div className="About-header">Welcome to my corner of the internet</div>
          <div className="About-body">
            This site exists to hold a portfolio of my current and on-going work.<br />
            I hope you enjoy your stay. Feel free to contact me with any questions or bugs.<br />
            <div className="About-media">
              <div className="Media-item btn-github Media-github"> GitHub</div>
              <div className="Media-item btn-facebook Media-linkedIn"> LinkedIn </div>
              <div className="Media-item btn-adn Media-email"> Email </div>
            </div>
            This dead space means I actually need to build something to fill it... -___-
          </div>
        </div>
      </div>
    )
  }
}
export default About;
