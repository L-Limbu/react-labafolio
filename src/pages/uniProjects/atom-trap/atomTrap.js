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
                <h2 className='atom-h'>Trapping an atom</h2>
                <p className='atom-text'>
                    Atoms are particles that makes stuff up, so dont believe it. But to believe it we must first see it and a way to
                    do that is to trap an atom. So how do we make this trap specifically for atoms.
                    <br />
                    Atoms when they lose their electron(s), they become charged so their movement or path can be easily controlled. 
                    So we must make a trap that controls their movement such that it does not fly away.
                </p>
                <h2 className='atom-h'>Bird's-Eye View</h2>
                <br/>
                <img className='atom-img' src = {image1} />
                <br/>
                <p className='atom-text'>
                    Here we have trapped the atom since it only moves in circle. In the picture the line seems a bit too thick so lets
                    look at the animation to have a closer inspection to see what's really going on.
                </p>
                <video className='atom-videos' controls  loop playsinline={true}> <source src={video1} /></video>
                <br/>

                <p className='atom-text'>
                    Looking at the animation the atom seems to be travelling in circle within as circle hence the thick line in the 
                    graph, but still it moves in a circle so it's trapped.
                    <br />
                    The animation shows that the atom is trapped in x-y space (forward/backwards and sideways) such that it cannot fly away 
                    forwards/backwards and sideways. However it could still escape upwards or downwards (in z space). Therefore we need 
                    to fix this issue too.
                </p>
                <br/>
                <h2 className='atom-h'>Hope it doesn't fly away</h2>
                <br/>
                <img className='atom-img' src = {image2} />
                <br/>
                <p className='atom-text'>
                    The graph shows the path of the atom which kind of forms a square mesh, suggests that the atom is trapped 
                    since it doesn't escape from that square mesh.
                </p>
                <video className='atom-videos' controls  loop playsinline={true}> <source src={video2} /></video>
                <br/>
                <p className='atom-text'>
                    Looking at the animation, we see that the particles just bounces up and down. Since the atom just bounces 
                    this suggests that the atom is trapped in z space (upwards and downwards) too. So we have successfully trapped
                    an atom.
                    <br/>
                    Lets look at in graph and animation in 3D to get the overall movement of the atom in the trap.
                </p>
                <br/>
                <h2 className='atom-h'>Full Picture</h2>
                <br/>
                <img className='atom-img' src = {image3} />
                <br/>
                
                <video className='atom-videos' controls  loop playsinline={true}> <source src={video3} /></video>
                <br/>
                <p className='atom-text'>
                    Looking at the 3D aspect of the trap, we see that the path of the atom forms a cone shape as it moves in a circle
                    within a circle, bouncing up and down. 
                    <br/> Also note that this trap is very small as the cone in the 3D picture could fit inside a 4 millimeter cube.
                </p>
                <h3 className='atom-h'>Code used</h3>
                <a href='https://github.com/L-Limbu/Penning-Trap' target="_blank"> Python</a>
                <h2 className='atom-h'>-Fin-</h2>
                <br />
            </div>
        </div>
        
        )
}