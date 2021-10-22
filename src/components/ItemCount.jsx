import { useState } from "react";

export function ItemCount() {
    let [count, setCount] = useState(1);

    function sumarProducto() {
        setCount(count + 1);
        if ((count = 10)) {
            setCount((count = 10));
            alert("Maximo de productos disponibles");
        }
    }

    function restarProducto() {
        setCount(count - 1);
        if (count <= 0) {
            setCount((count = 0));
            alert("No puedes seleccionar productos negativos");
        }
    }

    function mostrarCantidadProductos() {
        console.log({ count });
    }

    return (
        <div className="centrar">
            <h2>Cantidad de productos: {count} </h2>
            <button onClick={sumarProducto}>+</button>
            <button onClick={restarProducto}>-</button>
            <button onClick={mostrarCantidadProductos}>
                agregar al carrito
            </button>
        </div>
    );
}
