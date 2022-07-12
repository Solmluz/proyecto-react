import "../../styles/main.scss";
import { Link } from "react-router-dom";
import React, {useContext} from "react";
import { CartContext } from "../../context/cartContext";

const Item = ({ info }) => {
  return (
      <Link to={`/detalle/${info.id}`} className="producto">
        <img src={info.image} alt="" />
        <div className="producto__texto">
        <h2>{info.title}</h2>
        <p>{info.cost}</p>
        </div>
        <button className="producto__button">Más información</button>
      </Link>
  );
};

export default Item;
