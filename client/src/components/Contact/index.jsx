import React, { Component } from 'react';

import './contact.scss';

import { Icon } from 'react-icons-kit';
import { location } from 'react-icons-kit/icomoon/location';
import { phone } from 'react-icons-kit/icomoon/phone';
import { github } from 'react-icons-kit/icomoon/github';
import { ic_mail_outline } from 'react-icons-kit/md/ic_mail_outline';
import { facebookSquare } from 'react-icons-kit/fa/facebookSquare';
import { linkedinSquare } from 'react-icons-kit/fa/linkedinSquare';



class BackgroundImage extends Component {
    render () {
        return <div className='contact-container'>
                    <div className='background-headers'>
                        <div className='contact-smaller-header'><h3>Feel free to email me!</h3></div>
                        <div className='contact-header'><h1>GET IN CONTACT</h1></div>
                    </div>

                    <div className='information'>
                        <div className='contact-info'>
                            <Icon size={40} icon={phone} className='icon'/>
                            <div className='phoneNumber'>(323) 603-7431</div>
                        </div>

                        <div className='contact-info'>
                            <Icon size={40} icon={ic_mail_outline} className='icon'/>
                            <div className='email'>danieljoonkimm@gmail.com</div>
                        </div>

                        <div className='contact-info'>
                            <Icon size={40} icon={location} className='icon'/>
                            <div className='from'>Los Angeles, CA</div>
                        </div>
                    </div>
               </div>
    }
}

export default BackgroundImage;