import logo from '../assets/images/logoLab.png';
import '../assets/css/App.css';

function Login() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bem vindo ao LabTrip para agências - Login.
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

export default Login;
