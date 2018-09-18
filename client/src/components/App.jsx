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
                <Navigation/>
                <Header/>
            </div>
        )
    }
}

export default App;