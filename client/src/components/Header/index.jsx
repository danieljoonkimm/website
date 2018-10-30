import React, { Component } from "react";
import Typed from "react-typed";
import "./header.scss";
import background1 from "../../../public/background1.jpg";
import background2 from "../../../public/background2.jpg";
import background3 from "../../../public/background3.jpg";
import background4 from "../../../public/background4.jpg";
import background5 from "../../../public/background5.jpg";

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
      <div className="header_container">
        <div className="header_heading"><h1>Daniel Kim</h1></div>
        
        <div className="header_icons">
          <div className="github" ><a href="https://github.com/danieljoonkimm"><Icon size={40} icon={github}/></a></div>
          <div className="linkedin"><a href="https://www.linkedin.com/in/danieljoonkimm/"><Icon size={40} icon={linkedinSquare} /></a></div>
        </div>
      </div>
    );
  }
}

export default Header;
