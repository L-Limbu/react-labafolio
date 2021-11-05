import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='waveAnimationSlow' className='homePage-text'>
          Welcome to my portfolio website. Hope you enjoy my work.
        </p>
        <button className='home-button'> 
          Display
        </button>


      </header>
    </div>
  );
}

export default App;
