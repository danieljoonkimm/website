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
                percent={88}
                theme={{ active: { trailColor: "#535B63", color: "#e44f59" } }}
              />
            </div>

            <div className="skill-progress" data-aos="fade-up">
              <div className="skill-title">
                <h3>Javscript</h3>
              </div>
              <Progress
                percent={88}
                theme={{ active: { trailColor: "#535B63", color: "#e44f59" } }}
              />
            </div>

            <div className="skill-progress" data-aos="fade-up">
              <div className="skill-title">
                <h3>React/Redux</h3>
              </div>
              <Progress
                percent={88}
                theme={{ active: { trailColor: "#535B63", color: "#e44f59" } }}
              />
            </div>
          </div>

          <div className="col-sm-6">
            <div className="skill-progress" data-aos="fade-up">
              <div className="skill-title">
                <h3>HTML5/CSS3</h3>
              </div>
              <Progress
                percent={88}
                theme={{ active: { trailColor: "#535B63", color: "#e44f59" } }}
              />
            </div>
            <div className="skill-progress" data-aos="fade-up">
              <div className="skill-title">
                <h3>SQL</h3>
              </div>
              <Progress
                percent={88}
                theme={{ active: { trailColor: "#535B63", color: "#e44f59" } }}
              />
            </div>
            <div className="skill-progress" data-aos="fade-up">
              <div className="skill-title">
                <h3>Node</h3>
              </div>
              <Progress
                percent={88}
                theme={{ active: { trailColor: "#535B63", color: "#e44f59" } }}
              />
            </div>
          </div>
        </div>

        <div className="moreSkills-columns">
          <div className="more-skills-header">
            <h1>MORE SKILLS</h1>
          </div>
          <div className="row">
            <div className="col-md-2 col-sm-4 col-xs-12">
              <div className="skill-title">
                <h3>MySQL</h3>
              </div>
              <div className="progress-circle">
                <Progress
                  type="circle"
                  percent={100}
                  theme={{
                    active: { trailColor: "#535B63", color: "#e44f59" }
                  }}
                  status="success"
                />
              </div>
            </div>

            <div className="col-md-2 col-sm-4 col-xs-12">
              <div className="skill-title">
                <h3>Socket.iO</h3>
              </div>
              <div className="progress-circle">
                <Progress
                  type="circle"
                  percent={100}
                  theme={{
                    active: { trailColor: "#535B63", color: "#e44f59" }
                  }}
                  status="success"
                />
              </div>
            </div>

            <div className="col-md-2 col-sm-4 col-xs-12">
              <div className="skill-title">
                <h3>PostgreSQL</h3>
              </div>
              <div className="progress-circle">
                <Progress
                  type="circle"
                  percent={100}
                  theme={{
                    active: { trailColor: "#535B63", color: "#e44f59" }
                  }}
                  status="success"
                />
              </div>
            </div>

            <div className="col-md-2 col-sm-4 col-xs-12">
              <div className="skill-title">
                <h3>PHP</h3>
              </div>
              <div className="progress-circle">
                <Progress
                  type="circle"
                  percent={100}
                  theme={{
                    active: { trailColor: "#535B63", color: "#e44f59" }
                  }}
                  status="success"
                />
              </div>
            </div>

            <div className="col-md-2 col-sm-4 col-xs-12">
              <div className="skill-title">
                <h3>Webpack</h3>
              </div>
              <div className="progress-circle">
                <Progress
                  type="circle"
                  percent={100}
                  theme={{
                    active: { trailColor: "#535B63", color: "#e44f59" }
                  }}
                  status="success"
                />
              </div>
            </div>

            <div className="col-md-2 col-sm-4 col-xs-12">
              <div className="skill-title">
                <h3>SASS</h3>
              </div>
              <div className="progress-circle">
                <Progress
                  type="circle"
                  percent={100}
                  theme={{
                    active: { trailColor: "#535B63", color: "#e44f59" }
                  }}
                  status="success"
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
