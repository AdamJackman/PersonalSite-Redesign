import React from 'react'

import claraLogo from './content/claraLogo.png'
import home from './content/adamHouse.jpg'

import './css/PreviousWork.css'


class PreviousWork extends React.Component {
  render() {
    return (
      <div className="PreviousWork-section">
        <h1 className="PreviousWork"> Previous Work: </h1>
        <div className="PreviousWork-container">
          <h1 className="PreviousWork-title">
            <div className="PreviousWork-logo-container">
              <img className="PreviousWork-companyLogo" src={claraLogo} alt="clara"/>
            </div>
            <p className="PreviousWork-Previous">- Full Stack Software Engineer</p>
          </h1>
          <div className="PreviousWork-tab">
            <div className="PreviousWork-imageDiv"><img className="PreviousWork-img" src={home} alt="stock home"/></div>
            <div className="PreviousWork-description">
              <div className="PreviousWork-para1">
                At Clara we know how important and influential a home is in life. <br />
                We are a diverse group of experts putting our heads together trying <br />
                to make getting that house the easiest and cheapest process possible. <br />
                <br />

                For me this involves building tech that will help build an efficient process, <br />
                share context between the team, automate work, fact check the team <br />
                and promote the best and most affordable options for the borrower <br />
                <br />
                <div className="work-link"> Check out the Clara website: <a href={"https://www.clara.com"} rel={'external'} className="PreviousWork-link">here</a></div>
                <div className="work-link"> Check out our reviews on Zillow: <a href={"https://www.zillow.com/lender-profile/claralending/"} rel={'external'} className="PreviousWork-link">here</a></div>
                <div className="work-link"> Check out our blog: <a href={"https://clara.com/blog/"} rel={'external'} className="PreviousWork-link">here</a></ div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default PreviousWork;
