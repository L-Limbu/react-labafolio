import React from 'react';
import './atomTrap.css'

import image1 from './resources/AtomTrap.png'
import image2 from './resources/AtomTrapXZ.png'
import image3 from './resources/AtomTrap3D.png'
import video1 from './resources/penningTrapXY.mov'
import video2 from './resources/penningTrapXZ.mp4'
import video3 from './resources/penningTrap3d.mp4'




export default function AtomTrap () {
    return (
        <div className='Atombody'>
            <h1 className='waveAnimationSlow'> Atom trap</h1>
            <div className='text-wrapper'>
                <h2 className='Atom-h2'>Atom Prison</h2>


                <img className='atom-img' src = {image1} />
                <br/>
                <img className='atom-img' src = {image2} />
                <br/>
                <img className='atom-img' src = {image3} />
                <br/>

                <video className='atom-videos' controls  loop playsinline={true}> <source src={video1} /></video>
                <br/>
                <video className='atom-videos' controls  loop playsinline={true}> <source src={video2} /></video>
                <br/>
                <video className='atom-videos' controls  loop playsinline={true}> <source src={video3} /></video>
                <br/>
            </div>
        </div>
        
        )
}