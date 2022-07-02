import ItemListContainer from "./components/itemListContainer";
import NavBar from "./components/navBar/navbar.jsx";
import ItemDetailContainer from "./components/itemDetailContainer";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ItemDetailContainer />
      <ItemListContainer greeting="Este es un texto placeholder" />
    </div>
  );
};

export default App;
