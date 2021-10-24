import React from "react";
import { ItemCount } from "./ItemCount";

export function ItemList({ greeting }) {
    function mostrarCantidadProductos(total) {
        console.log(`la cantidad total es ${total}`);
    }

    return (
        <div>
            <p> {greeting}</p>
            <ItemCount
                stock={10}
                initial={1}
                onAdd={mostrarCantidadProductos}
            />
        </div>
    );
}
