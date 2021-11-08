import React from 'react';

import '../App.css';
import { useHistory } from 'react-router-dom';

export default function HomePage() {
    const history = useHistory()
    return (
        
        <div>
          <header>
            
            <p className='waveAnimationSlow homePage-text'>
              Welcome to my portfolio website. <br/>Hope you enjoy my work.
            </p>
            <button className='home-button' onClick={() => history.push('/display')}> 
              Display
            </button>
    
    
          </header>
        </div>
    );
}