import "../../styles/main.scss";
import logo from "../../assets/placeholder.png"
import CartWidget from "../cartWidget/index"

const menuItems = [
  {
    id:1,
    label: "Item 1",
  },
  {
    id:2,
    label: "Item 2",
  },
  {
    id:3,
    label: "Item 3",
  }
];

const NavBar = () => {
    return (
      <header>
          <nav>
            <a href="#">
            <img src={logo} alt="" />
            </a>
            <a href="#">
                <h1>
                    Mi Tienda
                </h1>
            </a>
            <div>
              {menuItems.map((item) => (
                <a href="/" className= "nav-item" key={item.id}>
                  {item.label}
                </a>
              ))}
            </div>
            <CartWidget></CartWidget>      
          </nav>
      </header>
    );
  };
  
  export default NavBar;