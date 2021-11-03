import React from "react";
import { ItemCount } from "../containers/ItemListContainer/ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";

export const ItemDetail = ({ detail }) => {
    const [count, setCount] = useState(1);

    const onAdd = (cant) => {
        setCount(cant);
    };
    console.log(count);
    return (
        <div className="contain-cartDetail">
            <h2>{detail.title}</h2>
            <img src={detail.photo} alt={detail.title} />
            <p>{detail.desc}</p>
            <h3>$ {detail.price}</h3>
            <ItemCount stock={detail.stock} initial={1} onAdd={onAdd} />
            <Link to="/productos">
                <button>Volver</button>
            </Link>
        </div>
    );
};
