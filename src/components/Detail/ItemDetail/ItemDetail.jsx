import React from "react";
import { useCartContext } from "../../Contexts/CartContext";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ItemCount } from "../../ItemCount/ItemCount";

export const ItemDetail = ({ detail, AddedToCart }) => {
    const [quantity, setQuantity] = useState(0);

    const [purchaseQuantity, setPurchasequantity] = useState(false);

    const { addToCartList } = useCartContext();

    const addToCart = (quantityAdded) => {
        setQuantity(quantityAdded);

        addToCartList({ detail, quantity: quantityAdded });
        setPurchasequantity(true);
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
