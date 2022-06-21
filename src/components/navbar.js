import ShoppingBasketSharpIcon from '@mui/icons-material/ShoppingBasketSharp';
import "../styles/main.scss"
import logo from "../assets/placeholder.png"
import { pink } from '@mui/material/colors';

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
              <a href="">Item 1</a>
              <a href="">Item 2</a>
              <a href="">Item 3</a>
          <ShoppingBasketSharpIcon fontSize="large" sx={{ color: pink[500] }}/>
          </nav>
      </header>
    );
  };
  
  export default NavBar;