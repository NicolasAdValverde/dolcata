import React from "react";
import { ItemCount } from "../../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";

export const ItemDetail = ({ detail }) => {
    const [quantity, setQuantity] = useState(1);
    const [purchaseQuantity, setPurchasequantity] = useState(false);

    const onAdd = (count) => {
        setQuantity(count);
        console.log({ count }, "Cantidad desde itemDetail");
        // Traigo la funcion onAdd con el valor capturado y lo guardo en un estado, que va a ser la cantidad del producto.
        setPurchasequantity(true);
        // con la funcion setPurchasequantity en true tengo captuado el valor y muestro el boton finalizar compra que llevara al carrito con la cantidad del producto seleccionada
    };

    return (
        <div className="contain-cartDetail">
            <h2>{detail.title}</h2>
            <img src={detail.photo} alt={detail.title} />
            <p>{detail.desc}</p>
            <p>Cantidad seleccionada {quantity} unidad(es)</p>
            <h3>$ {detail.price}</h3>
            {purchaseQuantity ? (
                <Link to="/cart">
                    {" "}
                    <button> Finalizar compra </button>{" "}
                </Link>
            ) : (
                <ItemCount
                    stock={detail.stock}
                    initial={quantity}
                    onAdd={onAdd}
                />
            )}
            <Link to="/productos">
                <button>Volver</button>
            </Link>
        </div>
    );
};
