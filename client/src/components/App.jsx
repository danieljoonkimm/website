import React, { Component } from 'react';

import Header from '../components/Header';
import Navigation from '../components/Navigation';

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
            </div>
        )
    }
}

export default App;