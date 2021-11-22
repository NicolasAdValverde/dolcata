import { Link } from "react-router-dom";
import { useState } from "react";

export function ItemCount({ stock, initial, addToCart }) {
    let [count, setCount] = useState(initial);

    function increaseQty() {
        setCount(count + 1);
    }

    function decreaseQty() {
        setCount(count - 1);
    }

    const addToCartHandler = () => {
        addToCart(count);
    };

    return (
        <div className="centrar">
            <h4 className="white">Stock: {stock} </h4>
            <h4 className="white">
                Cantidad de productos a seleccionar : {count}{" "}
            </h4>
            <button
                onClick={increaseQty}
                disabled={count === stock}
                className="button-card-detail"
            >
                +
            </button>
            <button
                onClick={decreaseQty}
                disabled={count < 1}
                className="button-card-detail"
            >
                -
            </button>
            <button
                onClick={() =>
                    addToCartHandler(
                        console.log(
                            "capturo la cantidad en ItemCount y la llevo para mostrarla en itemDetail"
                        )
                    )
                }
                className="button-card-AddToCart-detail"
            >
                Agregar al carrito
            </button>

            <Link to="/productos">
                <button className="button-card-detail">Volver</button>
            </Link>

            {/* La funcion onAdd con el count (estado) me captura la cantidad seleccionada, pero se mostrara en consola en itemDetail*/}
        </div>
    );
}
