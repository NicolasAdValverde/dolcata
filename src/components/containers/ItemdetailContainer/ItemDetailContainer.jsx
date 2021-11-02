import React from "react";
import { useState, useEffect } from "react";
import { ItemDetail } from "../../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { Loader } from "../../Loader";
import { getFetchDetail } from "../../services/getFetchDetail";

export const ItemDetailContainer = () => {
    const [detail, setDetail] = useState([]);
    const [loading, setLoading] = useState(true);

    const { prodId } = useParams();

    useEffect(() => {
        getFetchDetail
            .then((res) => {
                setDetail(res.find((prod) => prod.id === parseInt(prodId)));
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, [prodId]);

    return <>{loading ? <Loader /> : <ItemDetail detail={detail} />}</>;
};
