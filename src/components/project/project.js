import React, {PropTypes} from 'react'

import './css/project.css'

class Project extends React.Component {
  render(){
    return(
      <div className="Project-box">
        <img src={this.props.img} className="App-logo" alt="woopsie" />
        <div className="Project-text">
          <div className="Project-header">{this.props.title}</div>
          <div className="Project-body">{this.props.content}</div>
        </div>
      </div>
    )
  }
}
Project.PropTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  img: PropTypes.object.isRequired
}
export default Project;
