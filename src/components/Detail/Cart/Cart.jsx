import React from "react";
import { useState } from "react";
import { useCartContext } from "../../Contexts/CartContext";
import { Link } from "react-router-dom";
import { NavBar } from "../../NavBar/NavBar";
import { getFirestore } from "../../services/getFirestore";
import firebase from "firebase/app";
import "firebase/firestore";

export const Cart = () => {
    const [orderId, setOrderId] = useState("");
    const [userForm, setUserForm] = useState({
        name: "",
        surname: "",
        phone: "",
        email: "",
    });
    const { cartList, removeItem, clearCart, totalPrice } = useCartContext();
    const createOrder = (e) => {
        e.preventDefault();

        let order = {};
        order.date = firebase.firestore.Timestamp.fromDate(new Date());
        order.buyer = userForm;
        order.total = totalPrice;
        order.items = cartList.map((itemAdded) => {
            const id = itemAdded.detail.id;
            const title = itemAdded.detail.title;
            const subtotal = itemAdded.detail.price * itemAdded.quantity;
            return { id, title, subtotal };
        });
        const dataBase = getFirestore();
        dataBase
            .collection("orders")
            .add(order)
            .then((response) => setOrderId(response.id))
            .catch((error) => alert("Error:", error))
            .finally(() => clearCart());
    };
    const handleChange = (e) => {
        setUserForm({
            ...userForm,
            [e.target.name]: e.target.value,
        });
    };
    return (
        <div>
            <NavBar />
            <p className="App title-carrito">Carrito de compras</p>
            {cartList.length ? (
                <div className="center">
                    <div className="table">
                        <table className="table-header">
                            <thead>
                                <tr>
                                    <th
                                        scope="row"
                                        className="table-th th-color"
                                    >
                                        Producto
                                    </th>
                                    <th className="table-th th-color">
                                        Cantidad
                                    </th>
                                    <th
                                        scope="row"
                                        className="table-th th-color"
                                    >
                                        Precio unitario
                                    </th>

                                    <th className="table-th App th-color">-</th>
                                </tr>
                            </thead>
                        </table>
                        {cartList.map((itemAdded) => (
                            <table
                                key={itemAdded.detail.id}
                                className="table-header"
                            >
                                <tbody>
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
                                                    removeItem(
                                                        itemAdded.detail.id
                                                    )
                                                }
                                                className="App button-card"
                                            >
                                                {" "}
                                                Remover
                                            </button>{" "}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        ))}
                        <table className="table-header">
                            <tfoot>
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

                                    <th className="table-th">
                                        Total: ${totalPrice}
                                    </th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <div className="form">
                        <form onSubmit={createOrder} onChange={handleChange}>
                            <legend className="form-legend">
                                Ingresá tus datos
                            </legend>
                            <div>
                                <label htmlFor="name" className="form-label">
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Juan"
                                    defaultValue={userForm.name}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="surname" className="form-label">
                                    Apellido
                                </label>
                                <input
                                    type="text"
                                    name="surname"
                                    placeholder="Pérez"
                                    defaultValue={userForm.surname}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="form-label">
                                    Teléfono
                                </label>
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="3492123456"
                                    defaultValue={userForm.phone}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="form-label">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="ejemplo@tuemail.com"
                                    defaultValue={userForm.email}
                                    required
                                />
                            </div>
                            <button className="buy-buttom">¡Comprar!</button>
                        </form>
                    </div>
                </div>
            ) : (
                <div className="App">
                    <p className="Cart-empty">
                        {" "}
                        tu numero de pedido es : {orderId}
                    </p>
                    <Link to="/productos">
                        {" "}
                        <button className="button-card-AddToCart-detail">
                            Ver mas productos
                        </button>{" "}
                    </Link>
                </div>
            )}
        </div>
    );
};
