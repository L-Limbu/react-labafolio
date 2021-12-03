
import React from 'react';
import './solar-system.css';
import video1 from './resources/rocky-orbit-xy-crop.mp4';
import video2 from './resources/rocky-orbit-xz-crop.mp4';
import video3 from './resources/Gassy_Orbit-xy-crop.mp4';
import video4 from './resources/GassyXZ_Orbit-crop.mp4';
import solar_img from './resources/trajectory.jpg';
export default function SolarSystem () {
   
    return (
        <div className='solar-body '>
            <h1 className='waveAnimationSlow'> Solar System</h1>
            <div className='text-wrapper'>
                <h2 className='solar-h2 '>How the planets move in Space</h2>

                <p className='solar-text'>
                    Usually when we make moving objects like cars and planes there is a engine and a wheel
                    which we can alter to change its direction or speed to whatever we desire. However, sadly for most objects in space
                    like comets, planets or stars, their paths are predefined and with no free will to decide or choose where they want to
                    go. The invisible string that dictates their path as they travel across vast empty space is a force called 
                     <strong> gravity</strong>. Gravity is the force of attraction between objects, everything in the universe has 
                     gravity, even us but this force is small for us but huge for planets and stars. 
                    <br /><br />
                    Newton, the guy who 1st discovered or <strong>thought</strong> about this invisible force, describes clearly how the 
                    planets moves around the stars.
                </p>
                <div className='list-wrapper'>
                    <ul> <strong>He says that:</strong>
                        <li>planets are like a fast cannon ball falling down</li>
                        <li>as the speed of the cannon ball increases so does the distance it falls to</li>
                        <li>when the speed is fast enough, the ball no longer hits the surface (assuming the earth is not flat 👀 )</li>
                        <li>therefore the cannon ball keeping on falling and is in <strong>orbit</strong></li>
                    </ul>
                </div>
                <p className='solar-text'>This method is also how spaceships goes to and stays on space, and most the things in space like satellite and 
                    the International Space Station (ISS) stays in space. <br /><br />
                    So in essence the planets are just falling in space and the thing they are falling to is the star or in our case
                    falling to the sun. But you might ask since gravity attract all other object, surely the planets are attracting 
                    other planets too... 
                    Yes, they do attract other objects because they have their own moon(s) but the distance between planets are so 
                    vast the force is negligible. So they are confined to their own mini system. 
                </p>
                <h2> Simulations </h2>
                <video className='videos' controls loop playsinline={false}>
                    <source src={video1} />
                </video>
               <br/>

                <video className='videos' controls  loop playsinline={true}>
                    <source src={video2} />
                </video>
                <br />
                <video className='videos' controls  loop playsinline>
                    <source src={video3} />
                </video>
                <br />
                <video className='videos' controls  loop playsinline>
                    <source src={video4} />
                </video>
                <br />
                <img style={{borderRadius: 5}} className='solar-img' src = {solar_img} />

            </div>
        </div>

        )
}