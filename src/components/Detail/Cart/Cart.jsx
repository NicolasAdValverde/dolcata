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
    // destructuring de las funciones cartList, removeItem, clearCart del context

    console.log(cartList, "cartList desde cart");

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
        console.log(order);
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
                <>
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
                                    <th scope="row" className="table-th">
                                        <button className="button-card">
                                            Check out
                                        </button>
                                    </th>
                                    <th className="table-th">
                                        Total: ${totalPrice}
                                    </th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <form onSubmit={createOrder} onChange={handleChange} className='form'>
                        <legend >
                            Ingresá tus datos
                        </legend>
                        <div>
                            <label htmlFor="name" >
                                Nombre
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Ingrese su nombre"
                                defaultValue={userForm.name}
                            />
                        </div>
                        <div>
                            <label htmlFor="surname" >
                                Apellido
                            </label>
                            <input
                                type="text"
                                name="surname"
                                placeholder="Ingrese su apellido"
                                defaultValue={userForm.surname}
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" >
                                Teléfono
                            </label>
                            <input
                                type="text"
                                name="phone"
                                placeholder="Ingrese su telefono"
                                defaultValue={userForm.phone}
                            />
                            
                        </div>
                        <div>
                            <label htmlFor="email" >
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="E-mail de contacto"
                                defaultValue={userForm.email}
                            />
                        </div>
                        <button >¡Comprar!</button>
                    </form>
                </>
            ) : (
                <div className="App">
                <h2> Gracias por tu compra </h2>
                <h3> tu numero de orden es: {orderId} </h3>
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
