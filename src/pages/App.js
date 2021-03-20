import logo from './logoLab.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bem vindo ao LabTrip para agências.
        </p>
        <a
          className="App-link"
          href="https://github.com/LabTrip"
          target="_blank"
          rel="noopener noreferrer"
        >
          LabTrip no github.
        </a>
      </header>
    </div>
  );
}

export default App;
