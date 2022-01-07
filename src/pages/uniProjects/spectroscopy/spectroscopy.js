import React from 'react';
import './spectroscopy.css'

import image1 from './resources/example-spec.png'
import image2 from './resources/setup.png'
import image3 from './resources/example-diffraction.png'
import image4 from './resources/explainer.png'
import image5 from './resources/comparing.png'
import image6 from './resources/reference.png'
import image7 from './resources/analysing.png'
import image8 from './resources/calibration.png'
import image9 from './resources/result.png'

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
                <img className='spec-img1' src={image1} />
                <p className='spec-text'>
                    Here we are comparing a sticky note with a PS4 CD case. We know the standard size of sticky note is 3"x3" 
                    or (3inch by 3 inch) and we wish to know the height of the case. <br />
                    From the image we can estimate the size of the case is a bit more than 2 sticky notes therefore we can guess 
                    the size of the case is around 6-8 inches (the size of the case is 7.5 inches). <br/>
                    We can tweak this technique just a little bit to know the wavelength of light. Lets see how... 
                </p>
                <h2 className='spec-h'>The Spectrometer</h2>
                <img className='spec-img' src={image2} />
                <p className='spec-text'>
                    The body of a spectrometer is made out of cardboard with a little slit so that light can enter. The grating is
                     removed from a CD's skin layer and is attached to the body. 
                    Also, a phone was placed after the grating to take pictures of the light. <br />
                    So overall, the light would enter through the slit and then be diffracted by the grating and a phone was used
                    to capture the diffracted lights. 
                </p>
                <h2 className='spec-h'>Diffracted Lights</h2>
                <img className='spec-img' src={image3} />
                <p className='spec-text'>
                    Here there are diffracted lights from 3 different light sources: Hydrogen, Mercury and Sodium lamp. 
                </p>
                <h2 className='spec-h'>Theory behind spectroscopy</h2>
                <img className='spec-img' src={image4} />
                <p className='spec-text'>
                    Visible light that we see is just a small section of the Electromagnetic wave where red light has the highest 
                    wavelength and violet the least as shown in the picture. But there is a clear pattern that we need to use for 
                    our spectrometer. We see that the wavelength of the light monotonically increases such that the wavelength of from 
                    violet to red keeps increasing.
                </p>
                <h2 className='spec-h'>Applying our secret pattern</h2>
                <img className='spec-img' src={image5} />
                <p className='spec-text'>
                    Wow, the diffracted light just seems to fit like a puzzle into the light spectrum. Whats next? <br/>
                    We need to find out a mathemetical equation that can compute the wavelenght of diffracted lights. Lets call
                    this equation the ✨✨"Calibration Function"✨✨.
                </p>
                <h2 className='spec-h'>✨Calibration Function✨</h2>
                <p className='spec-text'>
                    To know the calibration function we need to know:
                </p>
                <div className='spectro-list-wrapper'>
                <ol>
                        <li>The distance or position of the diffracted light</li>
                        <li>The wavelength of the diffracted light</li>
                    </ol>
                </div>
                <p className='spec-text'>
                    Here we used the diffracted light of a Mercury lamp as a reference.
                </p>
                <img className='spec-img2' src={image6} />
                <p className='spec-text'>
                    Finding the solution to these is easier than expexted because thanks to the Internet, we can know the wavelength
                    of the light through Wikipedia or any relevant site and compare the diffracted light to find the value.
                    
                    <br />
                    But to find the position of the diffracted might be a little laborious but nevertheless easy! First, we need to 
                    upload the image in a software where you can edit the image. For our experiment, we found that Paint was to easiest
                    to use.
                </p>
                <img className='spec-img' src={image7} />
                <p className='spec-text'>
                    Paint was easiest to use because the distance is shown as pixel as shown in the picture inside the red box.
                    So we just need to carefully record the position in units of pixel of each diffracted light. 
                </p>
                <h2 className='spec-h'>Math-Synthesis</h2>
                <p className='spec-text'>
                    We're entering the endgame here. Using the 2 sets of data we have found out we need to plot these value into a
                    graph to see what it looks like.
                </p>
                <img className='spec-img' src={image8} />
                <p className='spec-text'>
                    Plotting the graph, we can make a line of best fit as shown in the graph. And Tada! That line is our 
                    ✨Calibration Function✨ which we can use to find the wavelength of diffracted lights of other light source.
                    <br/>
                    <br />
                    Our Calibration function is:
                    <br />
                    λ = 2.014 x - 1077
                    <br />
                    <br />
                    To test out our calibration function we used Hydrogen Lamp to see how well our calibration function worked.
                    So again we determined the position of the diffracted lights using Paint and plug it into the ✨Calibration Function✨ 
                    which gave us the following results.
                </p>
                
                <img className='spec-img2' src={image9} />
                <p className='spec-text'>
                    Amazing! the difference between the our calculated wavelength and the actual wavelength was only a few nanometer 
                    which is smaller than a width of a hair (human hair). 
                    <br />
                    Fantastic!
                </p>
                
                <h2 className='spec-h'>Wrap up</h2>
                <p className='spec-text'>
                    This experiment was very easy to do with high precision too. But I will admit the most tricky part of this 
                    experiment was of course the ✨Calibration Function✨, but the key insight to understanding it was to fit 
                    the diffracted light from all light sources seemed to fit inside the light spectrum.
                </p>
                <h2 className='solar-h2'>-Fin-</h2>
                <br />

            </div>
        </div>
        
        )
}