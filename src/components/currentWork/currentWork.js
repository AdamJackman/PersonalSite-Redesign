import React from 'react'

import logo from './content/sofi-logo.svg'
import grad from './content/grad.jpg'

import './css/currentWork.css'


class CurrentWork extends React.Component {
  render() {
    return (
      <div className="CurrentWork-section">
        <h1 className="CurrentWork"> Current Work: </h1>
        <div className="CurrentWork-container">
          <h1 className="CurrentWork-title">
            <div className="CurrentWork-logo-container">
              <img className="CurrentWork-companyLogo" src={logo} alt="sofi"/>
            </div>
            <p className="CurrentWork-Current">- Senior Software Engineer</p>
          </h1>
          <div className="CurrentWork-tab">
            <div className="CurrentWork-imageDiv"><img className="CurrentWork-img" src={grad} alt="graduation"/></div>
            <div className="CurrentWork-description">
              <div className="CurrentWork-para1">
                Started working at SoFi as part of the an acquisition of Clara Lending. <br />
                Sofi has huge goals for 2018. The Clara team joins as a cohesive unit with user empathy and operations efficiency top of mind. <br />
                <br />
                At Sofi we will be applying the same lessons learnt at Clara to build systems to make operators as efficient as possible.<br />
                This will lead to a better experience for our employees and faster processing for the end users.<br />
                <br />
                With ambitious goals and our new CEO Anthony Noto coming onboard this year this is an exciting time to be at SoFi. <br/>
                <br />
                <div className="work-link"> Check out the Sofi website: <a href={"https://www.sofi.com"} rel={'external'} className="CurrentWork-link">here</a></div>
                <div className="work-link"> Check out our reviews on Zillow: <a href={"https://www.zillow.com/lender-profile/SoFiLendingCorp/"} rel={'external'} className="CurrentWork-link">here</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default CurrentWork;
