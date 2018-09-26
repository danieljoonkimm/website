import React, { Component } from 'react';

import './navigation.scss';

class Navigation extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        
        return(
            <div className='container red topBotomBordersOut'>
                <ul>
                    <li className='active'><a href='#'>Home</a></li>
                    <li><a href='#'>About Me</a></li>
                    <li><a href='#'>Skills</a></li>
                    <li><a href='#'>Portfolio</a></li>
                    <li><a href='#'>Contact Me</a></li>
                </ul>
            </div>
        )
    }
}

export default Navigation;