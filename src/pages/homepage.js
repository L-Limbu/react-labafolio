import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { useHistory } from 'react-router-dom';

export default function HomePage() {
    const history = useHistory()
    return (
        
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p className='waveAnimationSlow homePage-text'>
              Welcome to my portfolio website. Hope you enjoy my work.
            </p>
            <button className='home-button' onClick={() => history.push('/works')}> 
              Display
            </button>
    
    
          </header>
        </div>
    );
}