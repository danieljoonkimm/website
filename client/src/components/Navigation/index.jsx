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
            <div className='container child topBotomBordersOut'>
                <ul>
                    <li className='active'><a href='#'>Home</a></li>
                    <li><a href='#about'>About Me</a></li>
                    <li><a href='#skills'>Skills</a></li>
                    <li><a href='#portfolio'>Portfolio</a></li>
                    <li><a href='#contact'>Contact Me</a></li>
                </ul>
            </div>
        )
    }
}

export default Navigation;