// import React, { Component } from 'react';

//THIS IS FOR CHANGING TEXT OVER HOVER WITH MOUSE
// class Header extends Component {
//     constructor() {
//         super();
        
//         this.state = {
    //             hover: false
    //         }
    //     }
    
//     render() {
    //         return(
        //             <div className='wrapper' data-hover='CHECK OUT MY PAGE'>
        //                 DANIEL KIM
        //             </div>
        //         )
//     }
// }

// export default Header;

import React, { Component } from 'react';
import Typed from 'react-typed';
import './header.scss';

class Header extends Component {
    constructor() {
        super();

        this.state = {
        }
    }

    render() {
        return(
            <div className='wrapper'>
                <Typed className='wrapper-child'
                    strings={['^1000 DANIEL KIM']}
                    typeSpeed={80}
                    showCursor={false}
                >
                </Typed>
            </div>
        )
    }
}

export default Header;