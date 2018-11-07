import React, { Component } from "react";
import "./skills.scss";

import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

class Skills extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div id="skills" className="skills">
        <div className="containerForSkills">
          <div className="headerSkills">
            <h1>Skills</h1>
          </div>

          <div className="col-sm-6">
            <div className="skill-progress" data-aos="fade-up">
              <div className="skill-title">
                <h3>Javscript</h3>
              </div>
              <Progress
                percent={99}
                theme={{ active: { trailColor: "#535B63", color: "#fff" } }}
              />
            </div>

            <div className="skill-progress" data-aos="fade-up">
              <div className="skill-title">
                <h3>HTML/CSS3</h3>
              </div>
              <Progress
                percent={95}
                theme={{ active: { trailColor: "#535B63", color: "#fff" } }}
              />
            </div>

            <div className="skill-progress" data-aos="fade-up">
              <div className="skill-title">
                <h3>React/Redux</h3>
              </div>
              <Progress
                percent={94}
                theme={{ active: { trailColor: "#535B63", color: "#fff" } }}
              />
            </div>
          </div>

          <div className="col-sm-6">
            <div className="skill-progress" data-aos="fade-up">
              <div className="skill-title">
                <h3>Node/Express</h3>
              </div>
              <Progress
                percent={92}
                theme={{ active: { trailColor: "#535B63", color: "#fff" } }}
              />
            </div>
            <div className="skill-progress" data-aos="fade-up">
              <div className="skill-title">
                <h3>SQL/NoSQL</h3>
              </div>
              <Progress
                percent={90}
                theme={{ active: { trailColor: "#535B63", color: "#fff" } }}
              />
            </div>
            <div className="skill-progress" data-aos="fade-up">
              <div className="skill-title">
                <h3>Git Workflow</h3>
              </div>
              <Progress
                percent={91}
                theme={{ active: { trailColor: "#535B63", color: "#fff" } }}
              />
            </div>
          </div>
        </div>

        <div className="moreSkills-columns">
          <div className="more-skills-header">
            <h1>MORE SKILLS</h1>
          </div>
          <div className="row">
            <div className="col-md-2 col-sm-4 col-xs-6">
              <div className="skill-title">
                <h3>Webpack</h3>
              </div>
              <div className="progress-circle">
                <Progress
                  type="circle"
                  percent={92}
                  theme={{
                    active: {
                      trailColor: "#535B63",
                      color: "#fff"
                    }
                  }}
                />
              </div>
            </div>

            <div className="col-md-2 col-sm-4 col-xs-6">
              <div className="skill-title">
                <h3>Socket.iO</h3>
              </div>
              <div className="progress-circle">
                <Progress
                  type="circle"
                  percent={85}
                  theme={{
                    active: {
                      trailColor: "#535B63",
                      color: "#fff"
                    }
                  }}
                />
              </div>
            </div>

            <div className="col-md-2 col-sm-4 col-xs-6">
              <div className="skill-title">
                <h3>Native</h3>
              </div>
              <div className="progress-circle">
                <Progress
                  type="circle"
                  percent={82}
                  theme={{
                    active: {
                      trailColor: "#535B63",
                      color: "#fff"
                    }
                  }}
                />
              </div>
            </div>

            <div className="col-md-2 col-sm-4 col-xs-6">
              <div className="skill-title">
                <h3>PHP</h3>
              </div>
              <div className="progress-circle">
                <Progress
                  type="circle"
                  percent={80}
                  theme={{
                    active: {
                      trailColor: "#535B63",
                      color: "#fff"
                    }
                  }}
                />
              </div>
            </div>

            <div className="col-md-2 col-sm-4 col-xs-6">
              <div className="skill-title">
                <h3>API</h3>
              </div>
              <div className="progress-circle">
                <Progress
                  type="circle"
                  percent={87}
                  theme={{
                    active: {
                      trailColor: "#535B63",
                      color: "#fff"
                    }
                  }}
                />
              </div>
            </div>

            <div className="col-md-2 col-sm-4 col-xs-6">
              <div className="skill-title">
                <h3>Babel</h3>
              </div>
              <div className="progress-circle">
                <Progress
                  type="circle"
                  percent={88}
                  theme={{
                    active: {
                      trailColor: "#535B63",
                      color: "#fff"
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
