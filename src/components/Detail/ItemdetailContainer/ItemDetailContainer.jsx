import React from "react";
import { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { Loader } from "../../Loader/Loader";
// import { getFetchDetail } from "../../services/getFetchDetail";
import { NavBar } from "../../NavBar/NavBar";
import { getFirestore } from "../../services/getFirestore";

export const ItemDetailContainer = () => {
    const [detail, setDetail] = useState([]);
    const [loading, setLoading] = useState(true);

    const { prodId } = useParams();

    useEffect(() => {
        const dataBase = getFirestore();

        const dataBaseQuery = dataBase.collection("items").doc(prodId).get();

        dataBaseQuery
            .then((item) => setDetail({ id: item.id, ...item.data() }))
            .catch((error) => alert("Error:", error))
            .finally(() => setLoading(false));
    }, [prodId]);

    //     getFetchDetail
    //         .then((res) => {
    //             setDetail(res.find((prod) => prod.id === parseInt(prodId)));
    //         })
    //         .catch((err) => console.log(err))
    //         .finally(() => setLoading(false));
    // }, [prodId]);

    return (
        <>
            <NavBar />
            {loading ? <Loader /> : <ItemDetail detail={detail} />}
        </>
    );
};
