import React, { Component } from "react";
import "./about.scss";

import picture1 from "../../../public/1.jpg";
import picture2 from "../../../public/2.jpg";
import picture3 from "../../../public/3.jpg";
import picture4 from "../../../public/4.jpg";
import picture5 from "../../../public/5.jpg";
import picture6 from "../../../public/6.jpg";
import aboutMePicture from "../../../public/aboutMePicture.jpg";
import icecream from "../../../public/icecream.jpg";
import graduationpic2 from "../../../public/graduation2.jpg";
import brother from "../../../public/brother.jpg";
// import polaroidbackground from '../../../public/polaroidbackground.jpg';

class About extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <div id="about" className="aboutMe">
          <div className="aboutMe-header">
            <h1 data-aos="fade-up">About Me</h1>
          </div>

          <div className="containerForPicDescription">
            <div className="about-container">
              <div className="aboutMe-paragraph" data-aos="fade-up">
                <h1 data-aos="fade-up">Objective</h1>
                <p data-aos="fade-up">
                  Always seeking opportunities to work with a team of engineers
                  focus of test-driven development, strong communication skills
                  and writing clean code while having the passion and drive to
                  stay on the cutting-edge of technology to create products in
                  order to give back to the community. Currently expanding my
                  languages in programming languages such as PHP and advanced
                  React.JS. I'm focused on creating highly scalable React and
                  Node full-stack applications with a strong interest in UI / UX
                  design.
                </p>
                <h1 data-aos="fade-up">What I Do</h1>
                <p data-aos="fade-up">
                  Software engineer with a penchant for creating grand user
                  experiences through scaling React/Redux applications and
                  optimizing front-end experiences through server-side rendering
                  and third party libraries like Redis, and React-router. I'm
                  experienced with both noSQL and SQL databases.
                </p>
              </div>
              <div className="containerAbout">
                <div className="aboutPicture">
                  <img src={aboutMePicture} />
                </div>
                <ul>
                  <li>Name: Daniel Kim</li>
                  <li>Date of Birth: 01 April 1992</li>
                  <li>Location: Los Angeles</li>
                  <li>Email: danieljoonkimm@gmail.com</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <div className="polaroid-parent">
              {/* <img src={polaroidbackground} alt=''/> */}
              <div className="polaroid">
                <p>Family Picture</p>
                <img src={brother} />
              </div>
              <div className="polaroid">
                <p>Best Friends</p>
                <img src={picture2} />
              </div>
              <div className="polaroid">
                <p>Dinner</p>
                <img src={picture3} />
              </div>
              <div className="polaroid">
                <p>Snowboarding</p>
                <img src={picture4} />
              </div>
              <div className="polaroid">
                <p>Birthday Surprise</p>
                <img src={picture5} />
              </div>
              <div className="polaroid">
                <p>My Girlfriend</p>
                <img src={picture6} />
              </div>
              <div className="polaroid">
                <p>Ice Cream Lover</p>
                <img src={icecream} />
              </div>
              <div className="polaroid">
                <p>Family</p>
                <img src={graduationpic2} />
              </div>
            </div>
          </div>

          <div className="about-content">
            <div className="about-me">
              <h1 data-aos="fade-up">Why I Love Coding</h1>
            </div>

            <div className="about-me-description">
              <ol data-aos="fade-up">
                <li>
                  <em>Perseverance and optimism: </em>
                  Programmers have to be okay with constantly failing - your
                  code is oftentimes not going to work on your first try. One of
                  my favorite quotes about failure: "Fear of failure is caused
                  by not knowing how to fail constructively.” (from The Art of
                  Mental Training) Programming teaches you how to fail
                  constructively - how to move forward and try a different
                  approach each time you fail.
                </li>

                <li>
                  <em>Patience: </em>
                  Staying patient through the failures is a necessary skill to
                  develop as a programmer. It may take several attempts -
                  spanning hours or days - to work through a complex programming
                  problem. Sometimes you will feel like you’ve tried everything
                  and still haven’t found a solution while a deadline is fast
                  approaching. Staying calm allows you to continue to focus on
                  your work rather than freezing up.
                </li>

                <li>
                  <em>Organization and focus: </em>
                  You may be juggling several variable definitions, code
                  changes, or alternate solutions as you tackle a single
                  problem.
                </li>

                <li>
                  <em>Linear thinking: </em>I noticed I was more logical and
                  clear in my thought process when I began learning programming.
                  Becoming a programmer requires you to be methodical by
                  analyzing an issue, systematically attempting solutions, and
                  learning from unsuccessful attempts in order to move forward.
                  A programming problem is not going to just go away if you
                  can’t find a solution - you must always find a solution.
                </li>

                <li>
                  <em>Adaptability: </em>
                  Features and requirements can rapidly change in software
                  development, and it’s important to be able to roll with the
                  punches. Flow around the rock!
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
