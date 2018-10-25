import React, { Component } from 'react';

import './contact.scss';

import { Icon } from 'react-icons-kit';
import { location } from 'react-icons-kit/icomoon/location';
import { phone } from 'react-icons-kit/icomoon/phone';
import { github } from 'react-icons-kit/icomoon/github';
import { ic_mail_outline } from 'react-icons-kit/md/ic_mail_outline';
import { facebookSquare } from 'react-icons-kit/fa/facebookSquare';
import { linkedinSquare } from 'react-icons-kit/fa/linkedinSquare';

import GoogleMapReact from 'google-map-react';
import pin from '../../../public/pin.png';
const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

const AnyReactComponent = ({ text }) => (
    <div style={{
      color: 'white', 
      background: 'black',
      padding: '15px 10px',
      display: 'inline-flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      transform: 'translate(-50%, -50%)'
    }}>
      {text}
    </div>
  );

class Contact extends Component {
    constructor() {
        super();

        this.state = {
            center: { lat: 34.052235, lng: -118.243683 },
            zoom: 11
        }
    }
    render () {
        return <div className='contact-container'>
                    <div className='background-headers'>
                        <div className='contact-smaller-header' data-aos="fade-up"><h3>Feel free to email me!</h3></div>
                        <div className='contact-header' data-aos="fade-up"><h1>GET IN CONTACT</h1></div>
                    </div>

                    <div className='information'>
                        <div className='contact-info' data-aos="fade-up">
                            <Icon size={40} icon={phone} className='icon'/>
                            <div className='phoneNumber'>(323) 603-7431</div>
                        </div>

                        <div className='contact-info' data-aos="fade-up">
                            <Icon size={40} icon={ic_mail_outline} className='icon'/>
                            <div className='email'>danieljoonkimm@gmail.com</div>
                        </div>

                        <div className='contact-info' data-aos="fade-up">
                            <Icon size={40} icon={location} className='icon'/>
                            <div className='from'>Los Angeles, CA</div>
                        </div>
                    </div>

                    <div className='footer'>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: REACT_APP_API_KEY }}
                            center={this.state.center}
                            defaultZoom={this.state.zoom}
                            style={{height: '300px'}}
                        >
                            <AnyReactComponent
                            lat={34.052235}
                            lng={-118.243683}
                            text={'My Location'}
                            />
                        </GoogleMapReact>
                    </div>
               </div>
    }
}
Contact.defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 11
  };

export default Contact;