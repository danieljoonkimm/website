import React, { Component } from 'react';
import Typed from 'react-typed';
import './header.scss';
import background1 from '../../../public/background1.jpg';
import background2 from '../../../public/background2.jpg';
import background3 from '../../../public/background3.jpg';
import background4 from '../../../public/background4.jpg';
import background5 from '../../../public/background5.jpg';


class Header extends Component {
    constructor() {
        super();

        this.state = {
        }
    }

    render() {
        return(
            <div id='header' className='slider'>
                <figure>
                    <img src={background1}/>
                    <img src={background2}/>
                    <img src={background3}/>
                    <img src={background4}/>
                    <img src={background5}/>
                </figure>
                    <div className='wrapper'>
                        <Typed className='wrapper-child'
                            strings={['^1000 DANIEL KIM']}
                            typeSpeed={80}
                            showCursor={false}
                        >
                        </Typed>
                    </div>


                
            </div>
        )
    }
}

export default Header;