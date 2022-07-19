import "../../styles/main.scss";
import CartWidget from "../cartWidget/index"
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
      <header className="navContainer">
          <nav className="nav">
            <ul className="nav__list">
              <li>
              <NavLink className="nav__link" to="/">
                <h1>
                  Pletsies
                </h1>
              </NavLink>
              </li>
              <li>
                <NavLink className="nav__link" to="/categoria/peluches">
                  Peluches
                </NavLink>
              </li>
              <li>
                <NavLink className="nav__link" to="/categoria/restauraciones">
                  Restauraciones
                </NavLink>
              </li>
              <li>
                <NavLink className="nav__link" to="/categoria/exclusivo">
                  Exclusivo
                </NavLink>
              </li>
              <li>
              <NavLink className="nav__link" to="/cart">
                <CartWidget />
              </NavLink>
              </li>
            </ul>    
          </nav>
      </header>
    );
  };
  
  export default NavBar;