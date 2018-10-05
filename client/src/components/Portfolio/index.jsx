import React, { Component } from 'react';
import './portfolio.scss';

import fakebook from '../../../public/fakebook.png';
import foodie from '../../../public/foodie.png';
import slackclone from '../../../public/slackclone.png';
import website from '../../../public/website.png';

class Portfolio extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render () {
        return(
            <div className='portfolio'>
                <h1>-Portfolio-</h1>

                <div className='portfolio-grid'>
                    <div className='portfolio-grid-item fakebook'>
                        <img src={fakebook} alt=''/>
                        <div className='project-hover'></div>
                        <a href="https://github.com/Greenfield-DDCH" target="_blank">View Code</a>
                    </div>

                    <div className='portfolio-grid-item foodie'>
                        <img src={foodie} alt=''/>
                        <a href="https://github.com/mdhiFoodie" target="_blank">View Code</a>
                    </div>

                    <div className='portfolio-grid-item slackclone'>
                        <img src={slackclone} alt=''/>
                        <a href="https://github.com/danieljoonkimm/Technical_Growth_Assessment" target="_blank">View Code</a>
                    </div>

                    <div className='portfolio-grid-item website'>
                        <img src={website} alt=''/>
                        <a href="http://www.danieljoonkimm.com" target="_blank">Website</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio;