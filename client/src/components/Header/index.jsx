import React, { Component } from "react";
import Typed from "react-typed";
import "./header.scss";

import { Icon } from "react-icons-kit";
import { github } from 'react-icons-kit/icomoon/github';
import { linkedinSquare } from 'react-icons-kit/fa/linkedinSquare';

class Header extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="header_container" id="home">
        <div className="header_heading"><h1>Daniel Kim</h1></div>
        
        <div className="header_icons">
        <a className="iconLinks" href="https://github.com/danieljoonkimm"><div className='githubContainer'>
          <div className="github" ><Icon size={15} icon={github}/></div>
          <div className='githubText'>Github</div>
          </div></a>
          <a className="iconLinks" href="https://www.linkedin.com/in/danieljoonkimm/"><div className='linkedinContainer'>
          <div className="linkedin"><Icon size={15} icon={linkedinSquare} /></div>
          <div className='linkedinText'>LinkedIn</div>
          </div></a>
        </div>
      </div>
    );
  }
}

export default Header;
