import { Item } from "../Item/Item";

export const ItemList = ({ product }) => {
    return (
        <div className="contain-cards">
            {product.map((prod) => (
                <Item key={prod.id} prod={prod} />
            ))}
        </div>
    );
};
