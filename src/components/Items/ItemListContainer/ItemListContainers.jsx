import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../../services/getFetch.js";
import { ItemList } from "../ItemList/ItemList";
import { Loader } from "../../Loader/Loader.jsx";
import { NavBar } from "../../NavBar/NavBar.jsx";

export function ItemListContainer() {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        if (id) {
            getFetch
                .then((res) => {
                    setProduct(res.filter((prod) => prod.categoria === id));
                })
                .catch((err) => console.log(err))
                .finally(() => setLoading(false));
        } else {
            getFetch
                .then((res) => {
                    setProduct(res);
                })
                .catch((err) => console.log(err))
                .finally(() => setLoading(false));
        }
    }, [id]);

    return (
        <div>
            <NavBar />
            {loading ? <Loader /> : <ItemList product={product} />}
        </div>
    );
}
