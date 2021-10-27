import React from "react";
import { useState, useEffect } from "react";
import { ItemDetail } from "../../ItemDetail/ItemDetail";
import { getFetchOneProduct } from "../../services/getFetch";

export const ItemDetailContainer = () => {
    const [oneProduct, setOneProduct] = useState({});

    useEffect(() => {
        getFetchOneProduct
            .then((res) => setOneProduct(res))
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            <ItemDetail oneProduct={oneProduct} />
        </>
    );
};
