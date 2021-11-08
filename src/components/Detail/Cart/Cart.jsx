import React from "react";
import { useCartContext } from "../../Contexts/CartContext";
import { Link } from "react-router-dom";
import { NavBar } from "../../NavBar/NavBar";

export const Cart = () => {
    const { cartList, removeItem, clearCart } = useCartContext();
    // destructuring de las funciones cartList, removeItem, clearCart del context

    console.log(cartList, "cartList desde cart");

    return (
        <div>
            <NavBar />
            <p className="App">carrito</p>

            {cartList.length ? (
                <div>
                    <button onClick={() => clearCart()}>Vaciar carrito</button>
                    <button>Pagar</button>
                </div>
            ) : (
                <div>
                    <p>El carrito está vacío</p>
                    <Link to="/"> Ir al inicio</Link>
                </div>
            )}
            {cartList.map((itemAdded) => (
                <div key={itemAdded.detail.id}>
                    <img
                        src={itemAdded.detail.img}
                        alt={itemAdded.detail.title}
                    />
                    <div>
                        <h5>{itemAdded.detail.title}</h5>

                        <p>{itemAdded.detail.desc}</p>
                        <p>$ {itemAdded.detail.price}</p>
                        <p>Cantidad: {itemAdded.quantity}</p>
                    </div>
                    <button onClick={() => removeItem(itemAdded.detail.id)}>
                        Eliminar producto
                    </button>
                </div>
            ))}
        </div>
    );
};
