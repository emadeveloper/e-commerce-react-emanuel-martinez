import logo from './logo.svg';
import './App.css';

const App = () => {
  const persona = {nombre: "ema", profesion: "estudiante"};
  
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola {persona.nombre} {persona.profesion} de React
        </p>
        <ButtonComponent />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const ButtonComponent = () => {
  return <button>Primer boton React :)</button>
}


export default App;
