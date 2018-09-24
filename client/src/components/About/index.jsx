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
                    <div className='aboutMePicture'>
                        <img src={aboutMePicture}/>
                    </div>

                    <div className='headerAndParagraph'>
                        <h1 className='aboutMe-Header'>HI, I'M DANIEL!</h1>

                    <div className='aboutMe-paragraph'>
                        <p>I'm a software engineer from Los Angeles.
                            I want to build a product that I'm passionate about - build a company around that product and grow
                            personally and professionally regardless of financial gains.
                            I've learned from past careers that money does not equal happiness.
                            Some food for thought: passion and happiness is always more important than stability.
                            Life has a great way of intervening in the way of well laid plans,
                            and the best plan is knowing that your plan could be broken; I
                            took my chance when it was possible, and found what I truly wanted to do - I have found my passion and happiness</p>
                    </div>
                </div>

                </div>

                <div className='photo-grid'>
                    <div className='photo-grid-items'>
                        <img src={clubPic}/>
                    </div>

                    <div className='photo-grid-items'>
                        <img src={conniemePic}/>
                    </div>

                    <div className='photo-grid-items'>
                        <img src={halloweenPic}/>
                    </div>

                    <div className='photo-grid-items'>
                        <img src={nrbPic}/>
                    </div>

                    <div className='photo-grid-items'>
                        <img src={snowboardingPicture}/>
                    </div>

                    <div className='photo-grid-items'>
                        <img src={vegasPic}/>
                    </div>
                </div>

                <div className='about-content'>
                    <div className='about-me'>
                        <h1>Why I Love Coding</h1>
                    </div>

                    <div className='about-me-description'>
                        <ol>
                            <li>
                                hi
                            </li>
                        </ol>
                    </div>

                </div>
            </div>
        )
    }
}

export default About;