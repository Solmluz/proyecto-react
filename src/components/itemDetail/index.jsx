import React, {useState} from "react";
import "../../styles/main.scss";
import { useCartContext } from "../../context/cartContext";
import ItemCount from "../itemCount";
import {Link} from "react-router-dom";


export const ItemDetail = ({ data }) => {
  const [goToCart, setGoToCart] = useState(false);
  const {addProduct} = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(data, quantity)
  };

  return (
    <div className="container">
      <div className="detail">
        <Link to="/" className="detail__return">←Volver</Link>
        <img className="detail__image" src={data.image} alt="" />
        <div className="content">
          <h1>{data.title}</h1>
          <p className="content__cost">{data.cost}</p>
          <p className="content__description">{data.description}</p>
          {
            goToCart
            ? <Link to="/cart">
              <button className="content__button">Terminar compra</button>
              </Link>
            :<ItemCount initial={1} stock={3} onAdd={onAdd} />
          }
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;