import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './uni-page.css'

export default function UniPage () {
    const history = useHistory();
    return (
        <div>
            <h1> Works done in University</h1>
            <div className='grid-wrapper'>
                <div className='grid-boxes'>

                    <div className='boxes'>
                        <h2 className='waveAnimationSlow'>Looking at the solar system</h2>
                        <div className='box-text'>
                            <i class="fas fa-meteor" ></i>
                            <p> University works</p>
                            <button onClick={() => history.push('/display/uni-page/solar-system')}>Know more</button>
                        </div>
                    </div>
                    <div className='boxes'>
                        <h2 className='waveAnimationSlow'>Trapping an atom</h2>
                        <div className='box-text'>
                            <i class="fas fa-atom" ></i>
                            <p>Personal Projects</p>
                            <button onClick={() => history.push('/display/uni-page/atom-trap')} >Know more</button>
                        </div>
                    </div>
                    <div className='boxes'>
                        <h2 className='waveAnimationSlow'>Magnets</h2>
                        <div className='box-text'>
                            <i class="fas fa-magnet"></i>
                            <p> Work</p>
                            <button onClick={() => history.push('/display/uni-page/magnets')}>Know more</button>
                        </div>
                    </div>
                    <div className='boxes'>
                        <h2 className='waveAnimationSlow'>Poor mans Spectrometer</h2>
                        <div className='box-text'>
                            <i class="fas fa-lightbulb"></i>
                            <p><br/> ;)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
}