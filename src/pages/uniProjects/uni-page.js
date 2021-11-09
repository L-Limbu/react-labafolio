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
                        <div className='uni-box-text '>
                            <i class="fas fa-meteor" ></i>
                            <p>
                                <strong>Keywords: Space, Simulation, Orbits</strong><br/><br/>
                              From initial condition such as position and speed to full trajectory/orbits of the planets. The orbits of the
                              planets can be predicted using Newton's 2nd law and maneuvering through some algebraic expressions. Simualtion leads to a simpler but deeper visualisation of the Solar System.
                            </p>
                            <button onClick={() => history.push('/display/uni-page/solar-system')}>Know more</button>
                        </div>
                    </div>
                    <div className='boxes'>
                        <h2 className='waveAnimationSlow'>Trapping an atom</h2>
                        <div className='uni-box-text'>
                            <i class="fas fa-atom" ></i>
                            <p>
                                <strong>Keywords: Atoms, Atomic Trap, Mass Spectrometer, Simulation</strong> <br /><br/>
                                Using simple idea of replusion between opposite charges we can use this principle to deflect and trap atom/ions. 
                             </p>
                            <button onClick={() => history.push('/display/uni-page/atom-trap')} >Know more</button>
                        </div>
                    </div>
                    <div className='boxes'>
                        <h2 className='waveAnimationSlow'>Magnets</h2>
                        <div className='uni-box-text'>
                            <i class="fas fa-magnet"></i>
                            <p>
                                <strong>Keywords: Magnets, Ising Model, Simulation </strong><br /><br/>
                                Fundamentally all of the solids in the universe is arranged in a lattice where the atoms are joined together through bonds. These atoms has a discrete magnetic state either north or south, using Ising model we can find out how the overall interaction of the magnetic fields behaves in the lattice depending on the magnetic property of atoms whether ferromagnetic or anti-ferromagnetic.
                            </p>
                            <button onClick={() => history.push('/display/uni-page/magnets')}>Know more</button>
                        </div>
                    </div>
                    <div className='boxes'>
                        <h2 className='waveAnimationSlow'>Poor mans Spectrometer</h2>
                        <div className='uni-box-text'>
                            <i class="fas fa-lightbulb"></i>
                            <p>
                                <strong>Keywords: Light, Spectroscopy, Experiment </strong><br /><br/>
                                Each elements is unique since they all have a distinct number of protons in their nucleus. However they also emit light at a distinct set of wavelengths which we know thanks to Quantum Mechanics. <br/>
                                In this experiment I make a cheap device that can measure precisely these wavelengths of light within a few nano meters.
                            </p>
                            <button onClick={() => history.push('/display/uni-page/spectroscopy')}>Know more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
}