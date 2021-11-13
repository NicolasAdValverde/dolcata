import React from "react";
import { useCartContext } from "../../Contexts/CartContext";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ItemCount } from "../../ItemCount/ItemCount";

export const ItemDetail = ({ detail, AddedToCart }) => {
    const [quantity, setQuantity] = useState(0);
    // Estado interno del componente, que setea a quantity la cantidad capturada en itemCount
    const [purchaseQuantity, setPurchasequantity] = useState(false);
    // Estado que me mostrara el boton Agregar al carrito en false y posteriormente en true mostrara el boton finalizar compra redireccionandome al cart de compras

    const { addToCartList } = useCartContext();
    // Destructuring de la funcion addToCartList del contexto

    const addToCart = (quantityAdded) => {
        // Traigo la funcion addToCart con el valor capturado y lo guardo en un estado, que va a ser la cantidad del producto.
        console.log(
            { detail, quantity: quantityAdded },
            " item y Cantidad desde itemDetail"
        );
        setQuantity(quantityAdded);
        // seteo de cantidad capturada en itemCount
        addToCartList({ detail, quantity: quantityAdded });
        setPurchasequantity(true);
        // con setPurchasequantity en true tengo captuado el valor y muestro el boton finalizar compra
    };

    return (
        <div className="bkgc-detail">
            <div className="contain-cartDetail">
                <div className="div-detail1">
                    <h2 className="white">{detail.title}</h2>
                    <div className="contain-img-detail">
                        <img src={detail.photo} alt={detail.title} />
                    </div>
                    <p className="white">{detail.desc}</p>
                </div>
                <div className="div-detail2">
                    <h3 className="white price-detail">
                        Precio $ {detail.price}
                    </h3>
                    {purchaseQuantity ? (
                        <div>
                            <Link to="/cart">
                                {" "}
                                <button className="button-card-AddToCart-detail">
                                    {" "}
                                    Finalizar compra{" "}
                                </button>{" "}
                            </Link>
                            <Link to="/">
                                <button className="button-card">Inicio</button>
                            </Link>
                        </div>
                    ) : (
                        <ItemCount
                            stock={detail.stock}
                            initial={quantity}
                            addToCart={addToCart}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};
