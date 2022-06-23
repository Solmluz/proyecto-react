import ItemListContainer from "./components/itemListContainer";
import NavBar from "./components/navBar/navbar.js";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Este es un texto placeholder" />
    </div>
  );
};

export default App;
