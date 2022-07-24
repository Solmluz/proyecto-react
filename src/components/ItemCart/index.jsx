import { useCartContext } from "../../context/cartContext";
import "../../styles/main.scss";

const ItemCart = ({product}) => {
    const {removeProduct} = useCartContext();

    return (
        <div className="itemCart">
            <img src={product.image} alt={product.title} />
            <div className="itemCart__text">
                <p>Título: {product.title}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio u.: ${product.cost}</p>
                <p>Subtotal: ${product.quantity * product.cost}</p>
                <button onClick={() => removeProduct(product.id)} className="itemCart__button">Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart