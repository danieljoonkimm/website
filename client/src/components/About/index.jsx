import React, { Component } from 'react';
import './about.scss';

import aboutMePicture from '../../../public/aboutMePicture.jpg';
import clubPic from '../../../public/clubPic.jpg';
import conniemePic from '../../../public/conniemePic.jpg';
import halloweenPic from '../../../public/halloweenPic.jpg';
import nrbPic from '../../../public/nrbPic.jpg';
import snowboardingPicture from '../../../public/snowboardingPicture.jpg';
import vegasPic from '../../../public/vegasPic.jpg';



class About extends Component {
    constructor() {
        super();

        this.state = {
        }
    }

    render() {
        return(
            <div>
                <div className='aboutMe'>

                    <h1>About Me</h1>

                    <div className='containerForPicDescription'>

                        <div className='aboutMe-paragraph'>
                            <h1>Who I Am</h1>
                                <p>I'm a software engineer from Los Angeles.
                                    I want to build a product that I'm passionate about - build a company around that product and grow
                                    personally and professionally regardless of financial gains.
                                    I've learned from past careers that money does not equal happiness.
                                    Some food for thought: passion and happiness is always more important than stability.
                                    Life has a great way of intervening in the way of well laid plans,
                                    and the best plan is knowing that your plan could be broken; I
                                    took my chance when it was possible, and found what I truly wanted to do - I have found my passion and happiness</p>
                            <h1>What I Do</h1>
                                <p>Software engineer with a penchant for creating grand user experiences through scaling React/Redux applications 
                                   and optimizing front-end experiences through server-side 
                                   rendering and third party libraries like Redis, and React-router. </p>
                        </div>


                        <div className='containerAbout'>
                            <ul>
                                <li>Name: Daniel Kim</li>
                                <li>Date of Birth: 01 April 1992</li>
                                <li>Location: Los Angeles</li>
                                <li>Email: danieljoonkimm@gmail.com</li>
                            </ul>
                        </div>
                
                </div>

                </div>

                <div className='photo-grid'>
                    <div className='photo-grid-items'>
                        <img src={clubPic}/>
                        <p>Daniel</p>
                    </div>

                    <div className='photo-grid-items'>
                        <img src={conniemePic}/>
                        <p>Daniel</p>
                    </div>

                    <div className='photo-grid-items'>
                        <img src={halloweenPic}/>
                        <p>Daniel</p>
                    </div>

                    <div className='photo-grid-items'>
                        <img src={nrbPic}/>
                        <p>Daniel</p>
                    </div>

                    <div className='photo-grid-items'>
                        <img src={snowboardingPicture}/>
                        <p>Daniel</p>
                    </div>

                    <div className='photo-grid-items'>
                        <img src={vegasPic}/>
                        <p>Daniel</p>
                    </div>
                </div>

                <div className='about-content'>
                    <div className='about-me'>
                        <h1>Why I Love Coding</h1>
                    </div>

                    <div className='about-me-description'>
                        <ol>
                            <li>
                                <em>Perseverance and optimism: </em> 
                                Programmers have to be okay with constantly failing - your code is oftentimes not going to work on your first try. 
                                One of my favorite quotes about failure: "Fear of failure is caused by not knowing how to fail constructively.” 
                                (from The Art of Mental Training) Programming teaches you how to fail constructively - 
                                how to move forward and try a different approach each time you fail.
                            </li>

                            <li>
                                <em>Patience: </em>
                                Staying patient through the failures is a necessary skill to develop as a programmer. 
                                It may take several attempts - spanning hours or days - to work through a complex programming problem. 
                                Sometimes you will feel like you’ve tried everything and still haven’t found a solution while a deadline 
                                is fast approaching. Staying calm allows you to continue to focus on your work rather than freezing up.
                            </li>

                            <li>
                                <em>Organization and focus: </em>
                                You may be juggling several variable definitions, code changes, or alternate solutions as you tackle a single problem.
                            </li>

                            <li>
                                <em>Linear thinking: </em>
                                I noticed I was more logical and clear in my thought process when I began learning programming. 
                                Becoming a programmer requires you to be methodical by analyzing an issue, systematically attempting solutions, 
                                and learning from unsuccessful attempts in order to move forward. A programming problem is not going to just go 
                                away if you can’t find a solution - you must always find a solution.
                            </li>

                            <li>
                                <em>Adaptability: </em>
                                Features and requirements can rapidly change in software development, and it’s important to be able 
                                to roll with the punches. Flow around the rock!
                            </li>
                        </ol>
                    </div>

                </div>
            </div>
        )
    }
}

export default About;