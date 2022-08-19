import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import ItemListContainer from "./container/itemlistcontainer";


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <h2>Los mejores celulares encontralos aca!</h2>
      <ItemListContainer items="Catalogo de celulares de nuestra tienda online" color="blue" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
};

export default App;
