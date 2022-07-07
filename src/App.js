import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/itemListContainer";
import NavBar from "./components/navBar/navbar.jsx";
import ItemDetailContainer from "./components/itemDetailContainer";
import Cart from "./components/cart";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Este es un texto placeholder" />}/>
          <Route path="/categoria/:categoriaId" element={<ItemListContainer greeting="Este es un texto placeholder" />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/detalle/:detalleId" element={<ItemDetailContainer />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
