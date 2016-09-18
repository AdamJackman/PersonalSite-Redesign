import React from 'react'

import claraLogo from './content/claraLogo.png'
import home from './content/homeShrunk.jpg'

import './css/currentWork.css'


class CurrentWork extends React.Component {
  render() {
    return (
      <div className="CurrentWork-section">
        <h1 className="CurrentWork"> Current Work: </h1>
        <div className="CurrentWork-container">
          <h1 className="CurrentWork-title">
            <img className="CurrentWork-companyLogo" src={claraLogo} alt="clara"/>
            <p className="CurrentWork-current">- Software Engineer</p>
          </h1>
          <div className="CurrentWork-tab">
            <div className="replaceWithImageTag"><img src={home} alt="stock home"/></div>
            <div className="CurrentWork-description">
              <div className="CurrentWork-para1">
              At Clara we are trying to revolutionize the mortgage process.<br />
              As a tech company this is being done through smart use of systems that we built from the ground up for just this purpose.</div>
              <div className="CurrentWork-para2">
                That said and done though. <br />
                We care deeply about someone trying to buy their dream house. <br />
                We care deeply about the experience and frustrations of our in-house loan origination team. <br />
                <br />
                Every day we come in and try to make those experiences better.
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default CurrentWork;
