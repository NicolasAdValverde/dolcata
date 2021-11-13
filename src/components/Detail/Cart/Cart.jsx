import React from "react";
import { useCartContext } from "../../Contexts/CartContext";
import { Link } from "react-router-dom";
import { NavBar } from "../../NavBar/NavBar";

export const Cart = () => {
    const { cartList, removeItem, clearCart, totalPrice } = useCartContext();
    // destructuring de las funciones cartList, removeItem, clearCart del context

    console.log(cartList, "cartList desde cart");

    return (
        <div>
            <NavBar />
            <p className="App title-carrito">Carrito de compras</p>

            {cartList.length ? (
                <>
                    <div className="table">
                        <table className="table-header">
                            <tr>
                                <th scope="row" className="table-th th-color">
                                    Producto
                                </th>
                                <th className="table-th th-color">Cantidad</th>
                                <th scope="row" className="table-th th-color">
                                    Precio unitario
                                </th>

                                <th className="table-th App th-color">-</th>
                            </tr>
                        </table>
                        {cartList.map((itemAdded) => (
                            <table
                                key={itemAdded.detail.id}
                                className="table-header"
                            >
                                <tr>
                                    <td className="table-th App">
                                        {itemAdded.detail.title}
                                    </td>
                                    <td className="table-th App">
                                        {itemAdded.quantity}
                                    </td>
                                    <td className="table-th App">
                                        {itemAdded.detail.price}
                                    </td>

                                    <td className="table-th App">
                                        {" "}
                                        <button
                                            onClick={() =>
                                                removeItem(itemAdded.detail.id)
                                            }
                                            className="App button-card"
                                        >
                                            {" "}
                                            Remover
                                        </button>{" "}
                                    </td>
                                </tr>
                            </table>
                        ))}
                        <table className="table-header">
                            <tr>
                                <th scope="row" className="table-th">
                                    <button
                                        className="button-card"
                                        onClick={() => clearCart()}
                                    >
                                        Vaciar carrito
                                    </button>
                                </th>
                                <th className="table-th">
                                    <Link to="/productos">
                                        <button className="button-card">
                                            ¿Sumar algun producto mas?
                                        </button>
                                    </Link>
                                </th>
                                <th scope="row" className="table-th">
                                    <button className="button-card">
                                        Check out
                                    </button>
                                </th>
                                <th className="table-th">
                                    Total: ${totalPrice}
                                </th>
                            </tr>
                        </table>
                    </div>
                </>
            ) : (
                <div className="App">
                    <p className="Cart-empty">El carrito está vacío</p>
                    <Link to="/productos">
                        {" "}
                        <button className="button-card-AddToCart-detail">
                            Encontrá aca lo que buscas!
                        </button>{" "}
                    </Link>
                </div>
            )}
        </div>
    );
};
