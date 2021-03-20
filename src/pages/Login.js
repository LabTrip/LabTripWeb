import splashArt from '../assets/images/splash.png';
import '../assets/css/reset.css';
import '../assets/css/login.css';

function Login() {
  return (
    <div className="container-principal">

      <div className="container-duplo">

        <div className="imagem-principal">
          <img src={splashArt} alt="Boas vindas Labtrip">
          </img>
        </div>

        <div className="formulario-principal">
          <h1>Olá! Seja bem vindo ao LapTrip para agências.</h1>

          <input type="text" placeholder="seuemail@gmail.com" />
          <input type="text" placeholder="senha123" />
          <div className="btn-entrar">
            <button>
              <a href={"#"}>Entrar</a>
            </button>
          </div>

          <a href="#">
            Esqueceu sua senha?
          </a>
          <a href="#">
            Primeiro acesso?
          </a>
        </div>

      </div>
    </div>
  );
}

export default Login;
