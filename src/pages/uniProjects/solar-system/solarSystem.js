
import React from 'react';
import './solar-system.css';

import video1 from './resources/rocky-orbit-xy-crop.mp4';
import video2 from './resources/rocky-orbit-xz-crop.mp4';
import video3 from './resources/Gassy_Orbit-xy-crop.mp4';
import video4 from './resources/GassyXZ_Orbit-crop.mp4';
import solar_img from './resources/solarOrbit.png';
import solar_img2 from './resources/solarOrbitXZ.png'
export default function SolarSystem () {
   
    return (
        <div className='solar-body '>
            <h1 className='waveAnimationSlow'> Solar System</h1>
            <div className='text-wrapper'>
                <h2 className='solar-h2'>How the planets move in Space</h2>

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
                <h2 className='solar-h2'> Simulations </h2>
                <img style={{borderRadius: 5}} className='solar-img' src = {solar_img} />
                <p className='solar-text'> 
                    Tada! This is the motion every planets in the solar system takes, all of it predefined.
                    Theres a quote that says "A picture is worth a thousand word", so since we like Physics lets change that saying to 
                    "A graph is worth a thousand question".
                    Looking at the graph we notice that there is a dense center containing the rocky planets like Earth and Mars and then
                    suddenly the distance between planets vastly increases, the outer planets are all gassy planets like Jupiter and Saturn.
                    <ul> <strong>Now lets start asking question:</strong>
                        <li>Why are the denser/rocky planets closer to the sun?</li>
                        <li>Why are the gassy planets much further apart and vice versa?</li>
                        <li>Why does the path looks like a perfect circle?</li>
                    </ul>
                </p>
                <p className='solar-text'> Lets look at the animated motion of these planets to gain a deeper insight on what else 
                is going on...
                </p>
               <br/>
                <video className='videos' controls loop playsinline={false}>
                    <source src={video1} />
                </video>
                <p className='solar-text'>
                </p>
               <br/>
               <video className='videos' controls  loop playsinline>
                    <source src={video3} />
                </video>
                <p className='solar-text'> We see that the planets closer to the sun moves faster compared to others. The rocky planets
                seems to be zooming in the sky while the gassy planets are running at a sluggish pace. Again from these animations, many
                questions can be asked.
                </p>

                <br />
                <h2 className='solar-h2'> Looking in a different perspective </h2>
                <img style={{borderRadius: 5}} className='solar-img' src = {solar_img2} />
                <br />
                <p className='solar-text'>
                    This graph shows the solar system sideways and it indicates the the solar system is somehow suprisingly flat like a pizza.
                    Now why is that? Out of so many different configurations, the universe decided that solar system will be
                     flat. Again more questions...
                </p>
                <p className='solar-text'>
                    Now finally lets look a the animation of the orbits sideways. But now lets start asking question.
                </p>
                <video className='videos' controls  loop playsinline={true}>
                    <source src={video2} />
                </video>
                
                <br />
                <video className='videos' controls  loop playsinline>
                    <source src={video4} />
                </video>
                <p className='solar-text'>
                    What do we notice?
                    <br/>
                    Again the questions are very similar to the previous animations. But we notice some pattern occuring here, 
                    that the planets has a very periodic motions as it swings similar to a pendulum. 
                    <br/>
                
                </p>
                <h2>Code used</h2>
                <a href='https://github.com/L-Limbu/Solar-system' target="_blank"> Python</a>
                <h2 className='solar-h2'>-Fin-</h2>
                <br />
                
                

            </div>
        </div>

        )
}