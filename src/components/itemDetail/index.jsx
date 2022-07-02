import "../../styles/main.scss";

export const ItemDetail = ({data}) => {
    return (
        <div className="container">
            <div className="detail">
                <img className="detail__image" src={data.image} alt="" />
                <div className="content">
                    <h1>{data.title}</h1>
                    <p className="content__cost">{data.cost}</p>
                    <p className="content__description">{data.description}</p>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail