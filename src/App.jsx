import "./App.css";
import Navbar from "./components/navbar/navbar";
import ItemListContainer from "./container/itemlistcontainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";


const App = () => {
  const [carrito, setCarrito] = useState([])
  const [productos, setProductos] = useState([])
  
  useEffect(() => {
    //Componente que ya se creo // 
    fetch('https://api.mercadolibre.com/sites/MLA/search?q=Samsung#json')
    .then(response => response.json())
    .then(data => {
      setProductos(data.results);
    })
  }, [])

  return (
    <div className="App">
      <Navbar carritoLength={carrito.length}/>
      <h2>Los mejores celulares encontralos aca!</h2>
      <ItemListContainer items="Catalogo de celulares de nuestra tienda online" color="blue" />
    </div>
  );
};

export default App;

