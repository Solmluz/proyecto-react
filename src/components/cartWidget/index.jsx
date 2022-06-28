import ShoppingBasketSharpIcon from '@mui/icons-material/ShoppingBasketSharp';
import "../../styles/main.scss";
import { pink } from '@mui/material/colors';

const CartWidget = () => {
    return (
        <ShoppingBasketSharpIcon fontSize="large" sx={{ color: pink[500] }}/>
    )
};

export default CartWidget;