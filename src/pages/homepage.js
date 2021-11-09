import React from 'react';

import '../App.css';
import { useHistory } from 'react-router-dom';
import ReactNativeHapticFeedback from "react-native-haptic-feedback";


export default function HomePage() {
    const history = useHistory()
    function handleDisplay() {
      const options = {
        enableVibrateFallback: true,
        ignoreAndroidSystemSettings: false
      }
      return ReactNativeHapticFeedback.trigger('impactMedium', options);
    }
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
