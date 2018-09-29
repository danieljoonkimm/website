import React, { Component} from 'react';
import './skills.scss';

import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';

class Skills extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return(
            <div className='skills'>

                <div className='containerForSkills'>
                    <div className='headerSkills'>
                        <h1>-Skills-</h1>
                    </div>

                    <div className='col-md-6'>
                        <div className='skill-progress'>
                            <div className='skill-title'>
                                <h3>Javscript</h3>
                            </div>
                            <div className='progress'>
                                <Progress percent={88}/>
                            </div>
                        </div>

                        <div className='skill-progress'>
                            <div className='skill-title'>
                                <h3>Javscript</h3>
                            </div>
                            <div className='progress'>
                                <Progress percent={88}/>
                            </div>
                        </div>

                        <div className='skill-progress'>
                            <div className='skill-title'>
                                <h3>React/Redux</h3>
                            </div>
                            <div className='progress'>
                                <Progress percent={88}/>
                            </div>
                        </div>

                        <div className='skill-progress'>
                            <div className='skill-title'>
                                <h3>HTML5/CSS3</h3>
                            </div>
                            <div className='progress'>
                                <Progress percent={88}/>
                            </div>
                        </div>

                        <div className='skill-progress'>
                            <div className='skill-title'>
                                <h3>SQL</h3>
                            </div>
                            <div className='progress'>
                                <Progress percent={88}/>
                            </div>
                        </div>

                        <div className='skill-progress'>
                            <div className='skill-title'>
                                <h3>Node</h3>
                            </div>
                            <div className='progress'>
                                <Progress percent={88}/>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            
        )
    }
}

export default Skills;