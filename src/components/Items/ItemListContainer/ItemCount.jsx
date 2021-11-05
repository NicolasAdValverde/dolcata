import { useState } from "react";
import { Link } from "react-router-dom";

export function ItemCount({ stock, initial, onAdd }) {
    let [count, setCount] = useState(initial);
    const [cambiarBoton, setCambiarBoton] = useState(false);

    function sumarProducto() {
        setCount(count + 1);
    }

    function restarProducto() {
        setCount(count - 1);
    }

    function HandleronAdd() {
        onAdd(count);
        setCount(initial);
        setCambiarBoton(true);
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

            {cambiarBoton ? (
                <Link to="/cart">
                    <button>Terminar Compra</button>
                </Link>
            ) : (
                <button onClick={HandleronAdd}>Agregar al carrito</button>
            )}
        </div>
    );
}
