import React from "react";
import { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { Loader } from "../../Loader/Loader";
import { getFirestore } from "../../services/getFirestore";

export const ItemDetailContainer = () => {
    const [detail, setDetail] = useState([]);
    const [loading, setLoading] = useState(true);

    const { prodId } = useParams();

    useEffect(() => {
        const dataBase = getFirestore();

        dataBase
            .collection("items")
            .doc(prodId)
            .get()
            .then((item) => setDetail({ id: item.id, ...item.data() }))
            .catch((error) => alert("Error:", error))
            .finally(() => setLoading(false));
    }, [prodId]);

    return <>{loading ? <Loader /> : <ItemDetail detail={detail} />}</>;
};
