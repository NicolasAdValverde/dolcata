import React from "react";
import { useState, useEffect } from "react";
import { getFetch } from "../../services/getFetch.js";
import { ItemList } from "../../ItemList/ItemList";
import { Loader } from "../../Loader.jsx";

export function ItemListContainer() {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getFetch
            .then((res) => {
                setProduct(res);
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, []);

    return <div>{loading ? <Loader /> : <ItemList product={product} />}</div>;
}
