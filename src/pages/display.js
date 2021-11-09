import React from 'react';
import './pages.css';
import {useHistory, Link, Redirect} from 'react-router-dom';


export default function Display () {
    const history = useHistory();
    return (
        <div >
            <h1 className='header waveAnimationSlow'> My Works</h1>
            <div className='grid-wrapper'>
                <div className='grid-boxes'>

                    <div className='boxes'>
                        <h2 className='waveAnimationSlow'>University works</h2>
                        <div className='box-text'>
                            <i class="fas fa-university"></i>
                            <p>I studied Theoretical Physics so most of work done in university was countless number of courseworks and exams. 
                               But those courseworks introduced me to programming where I simulated nature from orbiting planets to quantum
                               phenomena (which I enjoyed) 
                                along with some experimental works where I could shine and polish my Physics skills.</p>
                            <button onClick={() => history.push('/display/uni-page')}>View Works</button>
                        </div>
                    </div>
                    <div className='boxes'>
                        <h2 className='waveAnimationSlow'>Personal Projects</h2>
                        <div className='box-text'>
                            <i class="fas fa-grin-beam"></i>
                            <p> I only recently started doing personal projects but more projects are to come!</p>
                            <button onClick={() => history.push('/display/personal-page')} >View Works</button>
                        </div>
                    </div>
                    <div className='boxes'>
                        <h2 className='waveAnimationSlow'>Work</h2>
                        <div className='box-text'>
                            <i class="fas fa-briefcase"></i>
                            <p> Solving problems for people and society using programming. </p>
                            <button onClick={() => history.push('/display/work-page')}>View Works</button>
                        </div>
                    </div>
                    <div className='boxes'>
                        <h2 className='waveAnimationSlow'>Currently working on...</h2>
                        <div className='box-text'>
                            <i className="fas fa-pen-fancy"></i>
                            <p>Web development to show you guys my projects. </p>
                        </div>
                    </div>
                </div>
                <div className='boxes'>
                        <h2 className='waveAnimationSlow' >About me</h2>
                        <div className='box-text' id='AboutMe'>
                            <i class="fas fa-user-graduate"></i>
                            <p> Theoretical Physicist aspiring to be software and web developer.<br/><br/>Email: labalimbu360@gmail.com<br/><br/> :)</p>
                        </div>
                    </div>
            </div>
            
        </div>
    )
}