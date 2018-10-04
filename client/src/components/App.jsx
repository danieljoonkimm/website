import React, { Component } from 'react';

import Header from '../components/Header';
import Navigation from '../components/Navigation';
import About from '../components/About';
import Skills from '../components/Skills';

class App extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return(
            <div>
                {/* <Header/> */}
                {/* <Navigation/> */}
                <About/>
                {/* <Skills/> */}
            </div>
        )
    }
}

export default App;