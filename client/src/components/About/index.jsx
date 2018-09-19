import React, { Component } from 'react';

class About extends Component {
    constructor() {
        super();

        this.state = {
        }
    }

    render() {
        return(
            <div className='aboutMe'>
                <div>
                    <h1>Hi, I'm Daniel!</h1>
                </div>

                <div>
                    <p>I'm a software engineer from Los Angeles.
                        I want to build a product that I'm passionate about - build a company around that product and grow
                        personally and professionally regardless of financial gains.
                        I've learned from past careers that money does not equal happiness.
                        Some food for thought: passion/happiness is always more important than stability.
                        Life has a great way of intervening in the way of well laid plans,
                        and the best plan is knowing that your plan could be broken; I
                        took my chance when it was possible, and found what I truly wanted to do - I have found happiness</p>
                </div>
            </div>
        )
    }
}

export default About;