import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import ItemCart from "../ItemCart";
import "../../styles/main.scss";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  const order = {
    buyer: {
      name: "Luz",
      email: "luz@email.com",
      phone: "123456",
      adress: "adrgf",
    },
    items: cart.map((product) => ({
      id: product.id,
      title: product.title,
      cost: product.cost,
      quantity: product.quantity,
    })),
    total: totalPrice(),
  };

  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(({ id }) => console.log(id));
  };

  if (cart.length === 0) {
    return (
      <div className="carritoVacio">
        <p className="carritoVacio__texto">No hay elementos en el carrito</p>
        <Link to="/" className="carritoVacio__button">Volver a la tienda</Link>
      </div>
    );
  }

  return (
    <>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <div className="cartTotal">
      <p className="cartTotal__price">Total: ${totalPrice()}</p>
      <button onClick={handleClick} className="cartTotal__button">Emitir compra</button>
      </div>
    </>
  );
};

export default Cart;
