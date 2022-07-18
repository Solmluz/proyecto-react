import ShoppingBasketSharpIcon from '@mui/icons-material/ShoppingBasketSharp';
import { useCartContext } from "../../context/cartContext";
import "../../styles/main.scss";
import { brown } from '@mui/material/colors';

const CartWidget = () => {
    const {totalProducts} = useCartContext();
    return (
        <>
            <ShoppingBasketSharpIcon fontSize="large" sx={{ color: brown[700] }}/>
            <span>{totalProducts() || ''}</span>
        </>
    )
};

export default CartWidget;