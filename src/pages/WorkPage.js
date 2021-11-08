import React from 'react';
import './pages.css'
export default function WorkPage () {
    return (
        <div >
            <h1 className='header'> My Works</h1>
            <div className='grid-wrapper'>
                <div className='grid-boxes'>

                    <div className='boxes'>
                        <h2>Looking at the solar system</h2>
                        <i className="fas fa-meteor" ></i>
                    </div>
                    <div className='boxes'>
                        <h2>Trapping an atom</h2>
                        <i className="fas fa-atom"  ></i>
                    </div>
                    <div className='boxes'>
                        <h2>Weird Magnet</h2>
                        <i className="fas fa-magnet" ></i>
                    </div>
                    <div className='boxes'>
                        <h2>Currently working on...</h2>
                        <i className="fas fa-pen-fancy"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}