import { useState } from "react";

export function ItemCount({ stock, initial }) {
    let [count, setCount] = useState(initial);

    function sumarProducto() {
        setCount(count + 1);
    }

    function restarProducto() {
        setCount(count - 1);
    }

    function onAdd() {
        console.log(`Agregaste ${count} producto(s) a tu carrito`);
    }

    return (
        <div className="centrar">
            <h4>Stock: {stock} </h4>
            <h3>Cantidad de productos a seleccionar : {count} </h3>
            <button onClick={sumarProducto} disabled={count === stock}>
                +
            </button>
            <button onClick={restarProducto} disabled={count < 1}>
                -
            </button>
            <button onClick={onAdd}>Agregar al carrito</button>
        </div>
    );
}
