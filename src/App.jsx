import "./App.css";
import Navbar from "./components/navbar/navbar";
import ItemListContainer from "./container/itemlistcontainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";


const App = () => {
  const [carrito, setCarrito] = useState([])
  const [productos, setProductos] = useState([])
  
  const searchProducts = async () => {
    try{
      const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=celulares')
      const data = await response.json();
      setProductos(data.results);
    }catch(e){
      //console.log(e);
    }
  }

  useEffect(() => {
    searchProducts()
  }, [])

  return (
    <div className="App">
      <Navbar carritoLength={carrito.length}/>
      
      <ItemListContainer items="Catalogo de celulares de nuestra tienda online" color="blue" />
      <h2>Los mejores celulares encontralos aca!</h2>
      {productos.map((producto, index)=> {
          if (producto === 0) {
            return <b>El producto no se encuentra en stock</b>
          }
          
          return(
            <div key={index}>
              <h3>{producto.title}</h3>
              <img src={producto.thumbnail} alt="" />
              <div>
                <p>$ {producto.price}</p>
                <button onClick={()=>{
                  setCarrito([...carrito, producto]);
                }}>
                  Agregar al carrito
                </button>
              </div>
            </div>
          )
      })}
    </div>
  );
};

export default App;

