import React, { Component } from "react";

import "./navigation.scss";
import "smoothscroll";

class Navigation extends Component {
  constructor() {
    super();

    this.state = {

    };
  }

  render() {
    return (
      <div className="container child topBotomBordersOut navbar-nav">
        <ul className="smooth-scroll">
          <li className="nav-item active" id="#">
            <a className="nav-link scroll" href="#">Home</a>
          </li>
          <li className="nav-item" id="about">
            <a className="nav-link scroll" href="#about">About Me</a>
          </li>
          <li className="nav-item" id="skills">
            <a className="nav-link scroll" href="#skills">Skills</a>
          </li>
          <li className="nav-item" id="portfolio">
            <a className="nav-link scroll" href="#portfolio">Portfolio</a>
          </li>
          <li className="nav-item" id="contact">
            <a className="nav-link scroll" href="#contact">Contact Me</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
