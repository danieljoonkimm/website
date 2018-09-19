import React, { Component } from 'react';

import Header from '../components/Header';
import Navigation from '../components/Navigation';
import About from '../components/About';

class App extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return(
            <div>
                <Header/>
                <Navigation/>
                <About/>
            </div>
        )
    }
}

export default App;