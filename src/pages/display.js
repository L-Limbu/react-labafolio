import React from 'react';
import './pages.css';
import {useHistory} from 'react-router-dom';
import '../App.css'

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
                            <p> University works</p>
                            <button onClick={() => history.push('/display/uni-page')}>Know more</button>
                        </div>
                    </div>
                    <div className='boxes'>
                        <h2 className='waveAnimationSlow'>Personal Projects</h2>
                        <div className='box-text'>
                            <i class="fas fa-grin-beam"></i>
                            <p>Personal Projects</p>
                            <button onClick={() => history.push('/display/personal-page')} >Know more</button>
                        </div>
                    </div>
                    <div className='boxes'>
                        <h2 className='waveAnimationSlow'>Work</h2>
                        <div className='box-text'>
                            <i class="fas fa-briefcase"></i>
                            <p> Work</p>
                            <button onClick={() => history.push('/display/work-page')}>Know more</button>
                        </div>
                    </div>
                    <div className='boxes'>
                        <h2 className='waveAnimationSlow'>Currently working on...</h2>
                        <div className='box-text'>
                            <i className="fas fa-pen-fancy"></i>
                            <p>I am working on web development to show you guys my projects. <br/> ;)</p>
                        </div>
                    </div>
                </div>
                <div className='boxes'>
                        <h2 className='waveAnimationSlow' >About me</h2>
                        <div className='box-text' id='AboutMe'>
                            <i class="fas fa-user-graduate"></i>
                            <p> Email: labalimbu360@gmail.com<br/> ;)</p>
                        </div>
                    </div>
            </div>
            
        </div>
    )
}