import React from "react";
import { useState, useEffect } from "react";
// import { ItemCount } from "./ItemCount";
import { getFetch } from "../../services/getFetch.js";
import { ItemList } from "../../ItemList/ItemList";

export function ItemListContainer() {
    // function mostrarCantidadProductos(total) {
    //     console.log(`la cantidad total es ${total}`);
    // }

    const [product, setProduct] = useState([]);

    useEffect(() => {
        getFetch
            .then((res) => {
                setProduct(res);
            })
            .catch((err) => console.log(err));
        // .finally(() => console.log("Fin llamada Api"));
    }, []);

    return (
        <>
            <ItemList product={product} />
            {/* <ItemCount stock={}/> */}
        </>
    );
}
