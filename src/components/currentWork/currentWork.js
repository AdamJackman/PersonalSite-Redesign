import React from 'react'

import claraLogo from './content/claraLogo.png'
import home from './content/adamHouse.jpg'

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
            <div className="CurrentWork-imageDiv"><img className="CurrentWork-img" src={home} alt="stock home"/></div>
            <div className="CurrentWork-description">
              <div className="CurrentWork-para1">
                At Clara we know how important and influential a home is in life. <br />
                We are a diverse group of experts putting our heads together trying <br />
                to make getting that house the easiest and cheapest process possible. <br />
                <br />
                For me this involves building tech that will help build an efficient process, <br />
                share context between the team, automate work, fact check the team <br />
                and promote the best and most affordable options for the borrower <br />
                <br />
                Check out our reviews on Zillow: <a href={"https://www.zillow.com/lender-profile/marketing282/"} rel={'external'} className="CurrentWork-link">here</a><br /><br />
                Check out our blog: <a href={"https://clara.com/blog/"} rel={'external'} className="CurrentWork-link">here</a><br />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default CurrentWork;
