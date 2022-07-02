import ItemDetail from "../itemDetail";
import React, {useState, useEffect} from "react";

const producto = {id: 1, image:"https://img.freepik.com/free-photo/pastel-pink-vignette-concrete-textured-background_53876-129734.jpg?w=2000", title: "Producto 1", cost: "$123", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."};

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(producto);
            }, 1000);
        });
        getData.then(res => setData(res))
    }, [])
    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;