import React from "react";
import { useState, useEffect } from "react";
import { ItemDetail } from "../../ItemDetail/ItemDetail";
import { getFetchOneProduct } from "../../services/getFetch";
import { Loader } from "../../Loader";

export const ItemDetailContainer = () => {
    const [oneProduct, setOneProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getFetchOneProduct
            .then((res) => setOneProduct(res))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, []);

    return <>{loading ? <Loader /> : <ItemDetail oneProduct={oneProduct} />}</>;
};
