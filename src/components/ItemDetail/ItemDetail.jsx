import React from "react";
import { ItemCount } from "../containers/ItemListContainer/ItemCount";
import { Link } from "react-router-dom";

export const ItemDetail = ({ detail }) => {
    return (
        <div className="contain-cartDetail">
            <h2>{detail.title}</h2>
            <img src={detail.photo} alt={detail.title} />
            <p>{detail.desc}</p>
            <h3>$ {detail.price}</h3>
            <ItemCount stock={detail.stock} initial={1} />
            <Link to="/productos">
                <button>Volver</button>
            </Link>
        </div>
    );
};
