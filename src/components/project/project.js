import React, {PropTypes} from 'react'

import './css/project.css'

class Project extends React.Component {
  //<img src={this.props.img} className={"project-logo-" + this.props.pos} alt="woopsie" />
  constructor() {
    super();
    this.state = {img: false};
  };
  handleImage() {
   this.setState({img: !this.state.img});
  };
  //<img src={this.props.img} className={"Project-logo-" + this.props.pos} alt="woopsie" />
  render(){
    let GithubButton = (this.props.git) ?
      <a href={this.props.git} rel={'external'} className="btn Project-btn-github">Source Code</a>:
      <div className="prv"> Private Repo</div>
    return(
        <div className="Project-box">
          <div className="Project-text">
            <div className="Project-header">{this.props.title}</div>
            <div className="Project-body">{this.props.content}</div>
          </div>
          <div className="Project-btn-group">
            {GithubButton}
          </div>
        </div>
    )
  }
}
Project.PropTypes = {
  pos: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  img: PropTypes.object.isRequired,
  git: PropTypes.string
}
export default Project;
