import { Item } from "../Item/Item";
import { memo } from "react";

export const ItemList = memo(({ product }) => {
    return (
        <div className="contain-cards">
            {product.map((prod) => (
                <Item key={prod.id} prod={prod} />
            ))}
        </div>
    );
});
