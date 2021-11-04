import logo from './logo.svg';
import './App.css';

const handleClick= event =>  event.target.value = 'Hello world'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='waveAnimationSlow'>
          Welcome to my portfolio website. Hope you enjoy my work.
        </p>


      </header>
    </div>
  );
}

export default App;
