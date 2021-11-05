import logo from './logo.svg';
import './App.css';

const buttonStyle = {
  color: 'white',
  backgroundColor: 'black',
  border:  '0.3rem solid violet',
  borderRadius: 5,
  fontSize: '2rem',
  padding: '2rem'
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='waveAnimationSlow'>
          Welcome to my portfolio website. Hope you enjoy my work.
        </p>
        <button style={buttonStyle}> 
          Display
        </button>


      </header>
    </div>
  );
}

export default App;
