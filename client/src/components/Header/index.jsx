import React, { Component } from 'react';
import './header.scss';

class Header extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return(
            <div className='header'>
                <div>
                    Daniel Kim
                </div>
            </div>
        )
    }
};

export default Header;