import React, { Component } from 'react';

import './background.scss';

class BackgroundImage extends Component {
    render () {
        return <div>
                    <div className='background-headers'>
                        <div className='contact-smaller-header'><h3>Feel free to email me!</h3></div>
                        <div className='contact-header'><h1>GET IN CONTACT</h1></div>
                    </div>
               </div>
    }
}

export default BackgroundImage;