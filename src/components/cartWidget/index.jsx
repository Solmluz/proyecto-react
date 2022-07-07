import ShoppingBasketSharpIcon from '@mui/icons-material/ShoppingBasketSharp';
import "../../styles/main.scss";
import { brown } from '@mui/material/colors';

const CartWidget = () => {
    return (
        <ShoppingBasketSharpIcon fontSize="large" sx={{ color: brown[700] }}/>
    )
};

export default CartWidget;