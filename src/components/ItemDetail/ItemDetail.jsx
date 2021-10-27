import React from "react";
import { ItemCount } from "../containers/ItemListContainer/ItemCount";

export const ItemDetail = ({ oneProduct }) => {
    return (
        <div className="contain-cartDetail">
            <h2>{oneProduct.title}</h2>
            <img src={oneProduct.photo} alt={oneProduct.title} />
            <p>{oneProduct.desc}</p>
            <h3>$ {oneProduct.price}</h3>
            <ItemCount stock={oneProduct.stock} initial={1} />
            <button>Volver</button>
        </div>
    );
};
