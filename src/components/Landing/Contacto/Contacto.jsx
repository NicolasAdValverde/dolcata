import React from "react";
import { NavBar } from "../../NavBar/NavBar";
import { Loader } from "../../Loader/Loader";

export const Contacto = () => {
    return (
        <>
            <NavBar />

            <div className="container-contact">
                <div className="contact-content">
                    <ul>
                        <li>Mail: dolcata@dolcata.com</li>
                        <li>11-2121-5858</li>
                        <li>Instagra: dolcata</li>
                        <li>Facebook: dolcata</li>
                    </ul>
                </div>
                <div className="contact-loader">
                    <Loader />
                </div>
            </div>
        </>
    );
};
