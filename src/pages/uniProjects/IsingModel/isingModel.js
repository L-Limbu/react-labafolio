import React from 'react';
import './ising.css';

import video1 from './resources/ferromagnetic.mp4'
import video2 from './resources/anti-ferromagnetic.mp4'
import video3 from './resources/zoomed-antiferromagnetic.mp4'
import image1 from './resources/zoomed-anti-end.png'

export default function IsingModel () {
    return (
        <div className='ising-body'>
            <h1 className='waveAnimationSlow'> Ising Model</h1>
            <div className='text-wrapper'>
                <h2 className='ising-h'> Little Magnets</h2>
                <video className='ising-videos' controls  loop playsinline={true}> <source src={video1} /></video>
                <video className='ising-videos' controls  loop playsinline={true}> <source src={video2} /></video>
                <video className='ising-videos' controls  loop playsinline={true}> <source src={video3} /></video>

                <img className='ising-img' src={image1} />
                


                <h3 className='ising-h'>Code used</h3>
                <a href='https://github.com/L-Limbu/Ising-Model' target="_blank"> Python</a>
                <h2 className='ising-h'>-Fin-</h2>
                <br />

            </div>
        </div>
        
        )
}