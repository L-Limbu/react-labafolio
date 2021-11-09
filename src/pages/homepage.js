import React from 'react';

import '../App.css';
import { useHistory } from 'react-router-dom';



export default function HomePage() {
    const history = useHistory();
    function handleDisplay() {
      return navigator.vibrate(200)
    };
    return (
        
        <div>
          <header>
            
            <p className='waveAnimationSlow homePage-text'>
              Welcome to my portfolio website. <br/>Hope you enjoy my work :)
            </p>
            <button className='home-button' onClick={() => history.push('/display')} onPress={handleDisplay}> 
              Display
            </button>
    
    
          </header>
        </div>
    );
}
