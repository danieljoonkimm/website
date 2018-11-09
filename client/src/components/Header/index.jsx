import React, { Component } from "react";
import Typed from "react-typed";
import "./header.scss";

import { Icon } from "react-icons-kit";
import { github } from 'react-icons-kit/icomoon/github';
import { linkedinSquare } from 'react-icons-kit/fa/linkedinSquare';
import { book } from 'react-icons-kit/fa/book';


class Header extends Component {
  constructor() {
    super();

    this.state = {
      resume: false
    };
  }

  downloadResume() {
    console.log('download Resume');
  }

  render() {
    return (
      <div className="header_container" id="home">
        <div className="header_heading"><h1>Daniel Kim</h1></div>

        <div className="header_heading2">Front-End Engineer</div>
        
        <div className="header_icons">
          <div className="iconContents">
        <a className="iconLinks" href="https://github.com/danieljoonkimm"><div className='githubContainer'>
          <div className="github" ><Icon size={15} icon={github}/></div>
          <div className='githubText'>Github</div>
          </div></a>
          </div>
          <a className="iconLinks" href="https://www.linkedin.com/in/danieljoonkimm/"><div className='linkedinContainer'>
          <div className="linkedin"><Icon size={15} icon={linkedinSquare} /></div>
          <div className='linkedinText'>LinkedIn</div>
          </div></a>
          <a className="iconLinks" id="resumeIcon" onClick={this.downloadResume.bind(this)}><div className='resumeContainer'>
          <div className="resume"><Icon size={15} icon={book} /></div>
          <div className='resumeText'>Resume</div>
          </div></a>
        </div>
      </div>
    );
  }
}

export default Header;
