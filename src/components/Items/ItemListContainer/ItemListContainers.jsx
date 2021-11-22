import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { getFetch } from "../../services/getFetch.js";
import { ItemList } from "../ItemList/ItemList";
import { Loader } from "../../Loader/Loader.jsx";
import { NavBar } from "../../NavBar/NavBar.jsx";
import { getFirestore } from "../../services/getFirestore";

export function ItemListContainer() {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        const dataBase = getFirestore();

        if (id) {
            const dataBaseCategory = dataBase
                .collection("items")
                .where("category", "==", id)
                .get();

            dataBaseCategory
                .then((response) =>
                    setProduct(
                        response.docs.map((item) => ({
                            id: item.id,
                            ...item.data(),
                        }))
                    )
                )
                .catch((error) => alert("Error:", error))
                .finally(() => setLoading(false));
        } else {
            const dataBaseQuery = dataBase
                .collection("items")
                .orderBy("category")
                .get();

            dataBaseQuery
                .then((response) =>
                    setProduct(
                        response.docs.map((item) => ({
                            id: item.id,
                            ...item.data(),
                        }))
                    )
                )
                .catch((error) => alert("Error:", error))
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
