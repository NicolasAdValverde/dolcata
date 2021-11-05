import React from "react";
import { NavBar } from "../../NavBar/NavBar";
import "../../../components/style.css";

function HomePresentacion({ bienvenida, titulo }) {
    return (
        <div className="presentacion">
            <NavBar />
            <div className="titulo">
                <small> {bienvenida}</small>
                <h1> {titulo}</h1>
            </div>
        </div>
    );
}

export default HomePresentacion;
