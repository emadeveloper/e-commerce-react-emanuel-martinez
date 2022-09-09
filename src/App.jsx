import "./App.css";
import Navbar from "./components/navbar/navbar";
import ItemListContainer from "./components/ItemListContainer/itemlistcontainer";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemDetailContainer from "./components/Itemdetailcontainer/Itemdetailcontainer";


const App = () => {
  return (
    <>
    <Navbar />
    {/* <ItemListContainer texto='Tienda digital de celulares' /> */}
    <ItemDetailContainer />
    
    </>
  )
}

export default App;
