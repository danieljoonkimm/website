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
            <div className='navigation'>
                <ul className='navbar'>
                    <li className='navbarborder'>
                        <a href="#about Me">About Me</a>
                    </li>

                    <li className='navbarborder'>
                        <a href="skills">Skills</a>
                    </li>

                    <li className='navbarborder'>
                        <a href="portfolio">Portolfio</a>
                    </li>

                    <li className='navbarborder'>
                        <a href="contact">Contact Me</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Navigation;
