import React, {useState, useEffect} from "react";
import ItemCount from "../itemCount";
import ItemList from "../itemList";
import producto from "../../assets/producto.jpg"
import "../../styles/main.scss";

const productos = [
  {id: 1, image: "https://img.freepik.com/free-photo/pastel-pink-vignette-concrete-textured-background_53876-129734.jpg?w=2000", title: "Producto 1"},
  {id: 2, image: "https://img.freepik.com/free-photo/pastel-pink-vignette-concrete-textured-background_53876-129734.jpg?w=2000", title: "Producto 2"},
  {id: 3, image: "https://img.freepik.com/free-photo/pastel-pink-vignette-concrete-textured-background_53876-129734.jpg?w=2000", title: "Producto 3"},
  {id: 4, image: "https://img.freepik.com/free-photo/pastel-pink-vignette-concrete-textured-background_53876-129734.jpg?w=2000", title: "Producto 4"},
  {id: 5, image: "https://img.freepik.com/free-photo/pastel-pink-vignette-concrete-textured-background_53876-129734.jpg?w=2000", title: "Producto 5"},
  {id: 6, image: "https://img.freepik.com/free-photo/pastel-pink-vignette-concrete-textured-background_53876-129734.jpg?w=2000", title: "Producto 6"},
];

export const ItemListContainer = ({ greeting }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(productos);
      }, 1000);
    });
    getData.then(res => setData(res));
  }, [])

  const onAdd = (quantity) => {
    console.log(`Compraste ${quantity} unidades`);
  };
  return (
    <>
      <div className="landing">
        <span></span>
        {greeting}
      </div>
      <ItemCount initial={1} stock={8} onAdd={onAdd} />
      <ItemList data={data} />
    </>
  );
};

export default ItemListContainer;
