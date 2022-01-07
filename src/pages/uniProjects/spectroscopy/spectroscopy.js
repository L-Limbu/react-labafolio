import React from 'react';
import './resources/spectroscopy.css'

import image1 from './resources/example-spec.png'

export default function Spectroscopy () {
    return (
        <div className='Spec-body'>
            <h1 className='waveAnimationSlow'> Spectrometer</h1>
            <div className='text-wrapper'>
                <h2 className='spec-h'> Poor Mans Spectroscopy</h2>
                <p className='spec-text'>
                    Spectrometer is a device that measures the properties of a light. Here we make a simple and cheap 
                    spectrometer to measure the wavelength of light from different light sources.
                </p>
                <h2 className='spec-h'>Basics</h2>
                <p className='spec-text'>
                    Imagine a senario where we have 2 objects and we know the size of the first object and we wish to know the size 
                    of the second. We can compare the size ratio of these two to know the size of the second object. <br/>
                    For example:
                </p>
                <img className='spec-img' src={image1} />
                <p className='spec-text'>
                    Here we are comparing a sticky note with a PS4 CD case. We know the standard size of sticky note is 3"x3" 
                    or (3inch by 3 inch) and we wish to know the height of the case. <br />
                    From the image we can estimate the size of the case is a bit more than 2 sticky notes therefore we can guess 
                    the size of the case is around 6-8 inches (the size of the case is 7.5 inches). <br/>
                    We can tweak this technique just a little bit to know the wavelength of light. Lets see how... 
                </p>
                
            </div>
        </div>
        
        )
}