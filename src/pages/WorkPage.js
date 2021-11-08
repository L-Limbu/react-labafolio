import React from 'react';
import './pages.css'

function enter() {
    return (
<p style={{fontSize: 12}}>I am working on web development to show you guys my projects that I done.</p>
    )
}
export default function WorkPage () {
    return (
        <div >
            <h1 className='header waveAnimationSlow'> My Works</h1>
            <div className='grid-wrapper'>
                <div className='grid-boxes'>

                    <div className='boxes' onClick={enter()}>
                        <h2 className='waveAnimationSlow'>Looking at the solar system</h2>
                        <div className='box-text'>
                            <i className="fas fa-meteor" ></i>
                            <p> Some text about the solar system</p>
                            <button >Know more</button>
                        </div>
                    </div>
                    <div className='boxes'>
                        <h2 className='waveAnimationSlow'>Trapping an atom</h2>
                        <div className='box-text'>
                            <i className="fas fa-atom"  ></i>
                            <p> Some text about trapping an atom</p>
                            <button >Know more</button>
                        </div>
                    </div>
                    <div className='boxes'>
                        <h2 className='waveAnimationSlow'>Weird Magnet</h2>
                        <div className='box-text'>
                            <i className="fas fa-magnet" ></i>
                            <p> Some text about magnets</p>
                            <button >Know more</button>
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
            </div>
        </div>
    )
}