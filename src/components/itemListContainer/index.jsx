import ItemCount from "../itemCount";
import "../../styles/main.scss";

const ItemListContainer = ({ greeting }) => {
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
    </>
  );
};

export default ItemListContainer;
