import React, { Component } from 'react';

import './contact.scss';

class BackgroundImage extends Component {
    render () {
        return <div className='contact-container'>
                    <div className='background-headers'>
                        <div className='contact-smaller-header'><h3>Feel free to email me!</h3></div>
                        <div className='contact-header'><h1>GET IN CONTACT</h1></div>
                    </div>

                    <div className='contact-info'>
                        <div className='phoneNumber'>(323) 603-7431</div>
                        <div className='email'>danieljoonkimm@gmail.com</div>
                        <div className='from'>Los Angeles, CA</div>
                    </div>
               </div>
    }
}

export default BackgroundImage;