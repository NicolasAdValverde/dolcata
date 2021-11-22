import React from "react";
import { NavBar } from "../../NavBar/NavBar";
import { Formulario } from "../../../elements/Form/ElementsForm";

export const Contacto = () => {
    return (
        <>
            <NavBar />

            <div className="container-form">
                <Formulario>
                    <label htmlFor="">Nombre</label>
                    <input type="text" placeholder="Ingrese su nombre" />
                    <p>lorem ipsum dolor</p>
                </Formulario>
            </div>
        </>
    );
};
