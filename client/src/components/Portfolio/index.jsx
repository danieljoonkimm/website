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
            <div className="view view-tenth">
                <img src={fakebook} />
                <div className="mask">
                    <h2>Fakebook</h2>
                    <p>View Code</p>
                    <a href="#" className="info">Read More</a>
                </div>
            </div>
        )
    }
}

export default Portfolio;