import React from "react";
import './astroPics.css'
import SlideShow from "./resources/index";

import image1 from './resources/M7.png'
import image2 from './resources/M4.png'
import image3 from './resources/M33.png'
import image4 from './resources/Helix-nebula.png'


export default function AstroPhotograph () {
    return (
        <div className='astro-body '>
            <h1 className='waveAnimationSlow'> Astrophotography</h1>
            <div className='text-wrapper'>
                <SlideShow 
                interval={10000}
                images={[
                    image1,
                    image2,
                    image3,
                    image4
                    ]}
                />

            </div>
        </div>
    )
}