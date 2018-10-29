import React, { Component } from "react";
import "./portfolio.scss";

import fakebook from "../../../public/fakebook.jpg";
import foodie from "../../../public/foodie.jpg";
import slackclone from "../../../public/slackclone.jpg";
import website from "../../../public/personalwebsite.jpg";

class Portfolio extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div id="portfolio" className="portfolio-container">
        <div className="portfolio-header">
          <h1>Portfolio</h1>
        </div>
        <div className="portfolio">
          <div className="view view-tenth">
            <img src={fakebook} />
            <div className="mask">
              <h2>Fakebook</h2>
              <p>
                <a href="https://github.com/Greenfield-DDCH">View Code</a>
              </p>
              <br />
            </div>
          </div>

          <div className="view view-tenth">
            <img src={foodie} />
            <div className="mask">
              <h2>Foodie</h2>
              <p>
                <a href="https://github.com/mdhiFoodie">View Code</a>
              </p>
              <br />
            </div>
          </div>

          <div className="view view-tenth">
            <img src={slackclone} />
            <div className="mask">
              <h2>Slack Clone</h2>
              <p>
                <a href="https://github.com/danieljoonkimm/Technical_Growth_Assessment">
                  View Code
                </a>
              </p>
              <br />
            </div>
          </div>

          <div className="view view-tenth">
            <img src={website} />
            <div className="mask">
              <h2>Website</h2>
              <p>
                <a href="https://github.com/danieljoonkimm/website">
                  View Code
                </a>
              </p>
              <br />
              <p className="info">NOW VIEWING</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
