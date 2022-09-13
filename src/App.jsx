import "./App.css";
import Navbar from "./components/navbar/navbar";
import ItemListContainer from "./components/ItemListContainer/itemlistcontainer";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemDetailContainer from "./components/Itemdetailcontainer/Itemdetailcontainer";
import Cart from "./components/Cart/cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";



const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer texto='Tienda digital de celulares' />} />
        <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App;
