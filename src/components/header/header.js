import React from 'react'

import './css/header.css'

class Header extends React.Component {
  render(){
    return(
      <div className='Header-container'>
        <div className="Header-text">Adam Jackman</div>
        <div className="Header-sub">Software Engineer</div>
      </div>
    )
  }
}
export default Header;
