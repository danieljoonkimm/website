import React, { Component } from 'react';

import Header from '../components/Header';
import Navigation from '../components/Navigation';
import About from '../components/About';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';

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
                {/* <About/> */}
                {/* <Skills/> */}
                <Portfolio/>
            </div>
        )
    }
}

export default App;