import Item from "../item";
import "../../styles/main.scss";

const ItemList = ({data = []}) => {
    return(
        data.map(producto => <Item key={producto.id} info={producto} />)
    );
}

export default ItemList;