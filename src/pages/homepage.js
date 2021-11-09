import React from 'react';

import '../App.css';
import { useHistory } from 'react-router-dom';



export default function HomePage() {
    const history = useHistory();
    function handleDisplay() {
      return history.push('/display')
    };
    return (
        
        <div>
          <header>
            
            <p className='waveAnimationSlow homePage-text'>
              Welcome to my portfolio website. <br/>Hope you enjoy my work :)
            </p>
            <button className='home-button' onClick={handleDisplay}> 
              Display
            </button>
            <button className='home-button' onClick={navigator.vibrate(100)}>Vibrate</button>
    
    
          </header>
        </div>
    );
}
