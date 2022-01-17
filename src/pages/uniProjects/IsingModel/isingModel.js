import React from 'react';
import './ising.css';

import video1 from './resources/ferromagnetic.mp4'
import video2 from './resources/anti-ferromagnetism.mov'

import image1 from './resources/initail-cond.png'


export default function IsingModel () {
    return (
        <div className='ising-body'>
            <h1 className='waveAnimationSlow'> Ising Model</h1>
            <div className='text-wrapper'>
                <h2 className='ising-h'> Microscopic Magnets</h2>
                <p className='ising-text'>
                    Here we look at the behaviour of magnetic properties of atoms in very cold temperature of around 0-3K.
                </p>
                <h2 className='ising-h'> Basic of Magnets</h2>
                <p className='ising-text'>
                    All atoms have a tiny magnetic properties with their own north and south poles. When all the magnetic pole 
                    of the atoms in a magnet align, it creates a combined effect of a stronger magnetic properties. But not all 
                    atoms have the same magnetic properties like aligning thier poles with their neighbouring atoms which is 
                    called ferromagnetism. The neighbouring atom may also have a opposite pole such that it will cancel the overall 
                    magnetic field which is called antiferromagnetism. We will look at these 2 properties in more detail here. 
                    <br />
                </p>
                <img className='ising-img' src={image1} />
                <p className='ising-text'>
                    Here we have simulated 500 x 500 atoms where the yellow spots represents the north pole and purple represents
                    south pole. The net magnetic field of this system should be 0 since the atoms have not aligned. Now we will 
                    decrease the temperature of this system to see their properties reveal. 
                </p>
                <h2 className='ising-h'> Ferromagnetism</h2>
                <video className='ising-videos' controls  loop playsinline={true}> <source src={video1} /></video>
                <p className='ising-text'>
                    Here we see that the atoms in the system quickly forms regions of aligned magnetic fields such that the net magnetic 
                    field is not 0. This occurs because as heat escapes the system, it will try to reach a magnetic equilibrium 
                    which is controlled by its ferromagnetic property such that an atom  in the system tries to align its magnetic 
                    field with its neighbouring atoms. 
                </p>
                
                <h2 className='ising-h'> Antiferromagnetism</h2>
                <video className='ising-videos' controls  loop playsinline={true}> <source src={video2} /></video>
                <p className='ising-text'>
                    In contrast to the ferromagnetic animation, the antiferromagnetic system creates a very organised regions of magnetic
                    field of one tenth the size of the system and  creates a checkered pattern such that they all try to minimise the 
                    magnetisation effect. Therefore the overall magnetic field from a antiferromagnetic materials is 0. 
                </p>

                <h2 className='ising-h'>Wrap up</h2>
                <p className='ising-text'>
                    Considering the size of the system, I think that the duration of the simulation should be longer because we can 
                    still see the lines of uncertain atoms trying to decide its magnetic alignment. However making longer simulations 
                    takes more time and requires more storage capacity (one data for the simulation took 2GB). Maybe this project can 
                    be extended with a more powerful computer.
                </p>
                <h3 className='ising-h'>Code used</h3>
                <a href='https://github.com/L-Limbu/Ising-Model' target="_blank"> Python</a>
                <h2 className='ising-h'>-Fin-</h2>
                <br />

            </div>
        </div>
        
        )
}