import ItemListContainer from "./components/itemListContainer";
import NavBar from "./components/navBar/navbar.jsx";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Este es un texto placeholder" />
    </div>
  );
};

export default App;
