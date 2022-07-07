import React, {useState, useEffect} from "react";
import ItemCount from "../itemCount";
import ItemList from "../itemList";
import "../../styles/main.scss";
import { useParams } from "react-router-dom";

const productos = [
  {id: 1, image: "https://scontent.fros2-1.fna.fbcdn.net/v/t1.6435-9/198018571_505662190883137_3193261939766013007_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a26aad&_nc_ohc=8L5M4FAu3MoAX-mdW-A&_nc_ht=scontent.fros2-1.fna&oh=00_AT9ctyWvv5NpL5nsoQbe67b7I5flUKd3u7RfBl6mR_2NCw&oe=62EB54C2", category: "peluches", title: "Producto 1"},
  {id: 2, image: "https://scontent.fros2-2.fna.fbcdn.net/v/t1.6435-9/145560140_428239628625394_3571084309060589622_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a26aad&_nc_ohc=uSCekRu4XqcAX-EsX07&_nc_ht=scontent.fros2-2.fna&oh=00_AT948C9RXCoGNFjblfjR2UtvpMHlM8mlToCGbaCGKRZNEg&oe=62EDBF4A", category: "peluches", title: "Producto 2"},
  {id: 3, image: "https://scontent.fros2-1.fna.fbcdn.net/v/t1.6435-9/75349199_105419560907404_7066351993794592768_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9267fe&_nc_ohc=g9q9s0xeJhQAX8s5Jrd&_nc_ht=scontent.fros2-1.fna&oh=00_AT-zE0tPX-8tQu5J20AQHOaqu9c8aS0apRvOi00M8bznrg&oe=62EC0291", category: "peluches", title: "Producto 3"},
  {id: 4, image: "https://scontent.fros2-1.fna.fbcdn.net/v/t1.6435-9/109329997_285870319528993_4056898987923250373_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=9267fe&_nc_ohc=ZQq6oHZNpecAX9DozI7&_nc_oc=AQn3wSRjGE20tMnmvZROe-Vo23rg_PZIUID4WAuVRb5Jbo6LdGUBhrZsOHuOxzOsqu4&_nc_ht=scontent.fros2-1.fna&oh=00_AT-fgcWcJ9wKbmHDWwfxp2rnMLmLdKT51j4PAghxv4zmXw&oe=62ECC6D9", category: "peluches", title: "Producto 4"},
  {id: 5, image: "https://scontent.fros2-2.fna.fbcdn.net/v/t1.6435-9/81572614_142631643852862_2217210788488151040_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=9267fe&_nc_ohc=5B2QFhAu3qQAX-p9w1W&_nc_ht=scontent.fros2-2.fna&oh=00_AT9CFkUf2E5xChA2gH37FAeMH4noKzOeGwf3K-5U1RpsBg&oe=62ECC58F", category: "peluches", title: "Producto 5"},
  {id: 6, image: "https://scontent.fros2-2.fna.fbcdn.net/v/t39.30808-6/275748427_690939812355373_6220522887080014270_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a26aad&_nc_ohc=D88PveFRqWwAX8cnmt9&_nc_ht=scontent.fros2-2.fna&oh=00_AT_yEFIOwNY-8C2f6lyoHSSkVGDEnMhwIbMti_NEvr-9nA&oe=62CC0B40", category: "peluches", title: "Producto 6"},
  {id: 7, image: "https://i.pinimg.com/originals/be/0e/d9/be0ed9006ec15d2e54e34cfe624a36d9.jpg", category: "restauraciones", title: "Producto 7"},
  {id: 8, image: "https://i.pinimg.com/564x/b6/5c/f5/b65cf50d1ce33774fe2caf6d79d2c8a4.jpg", category: "restauraciones", title: "Producto 8"},
  {id: 9, image: "https://scontent.fros2-1.fna.fbcdn.net/v/t39.30808-6/281054770_729682941814393_6765577449059738338_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a26aad&_nc_ohc=GJlqSFOqGo4AX9EiMxA&_nc_ht=scontent.fros2-1.fna&oh=00_AT-tNKPox4MmdLjfH4qvWrOEALni8S_WEKAHNkf_wAmCRw&oe=62CD07F4", category: "exclusivo", title: "Producto 9"},
  {id: 10, image: "https://scontent.fros2-2.fna.fbcdn.net/v/t1.6435-9/190833482_496885018427521_131986432768428215_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a26aad&_nc_ohc=nWMDzqBpHDAAX_lRfHk&_nc_ht=scontent.fros2-2.fna&oh=00_AT_pqh-RMTL2cSO43GzFhiCHydqWpNwOu8RTyg5bnNq2qQ&oe=62ECF5DD", category: "exclusivo", title: "Producto 10"},
];

export const ItemListContainer = ({ greeting }) => {
  const [data, setData] = useState([]);

  const {categoriaId} = useParams();

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(productos);
      }, 1000);
    });
    if (categoriaId) {
      getData.then(res => setData(res.filter(categoria => categoria.category === categoriaId)));
    }
    else {
      getData.then(res => setData(res));
    }
  }, [categoriaId])

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
