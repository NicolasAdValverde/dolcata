import React from "react";
import "./style.css";
import logo from "../components/images/logo.png";
import dolcata from "../components/images/dolcata.png";

function NavBar() {
    return (
        <div className="presentacion">
            <div className="NavBar">
                <div className="NavBar-div">
                    <img className="logo" src={logo} alt="logo" />
                    <img className="dolcata" src={dolcata} alt="logo" />
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href="https://google.com">Home</a>
                            <a href="https://google.com">Productos</a>
                            <a href="https://google.com">Nosotros</a>
                            <a href="https://google.com">Contacto</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="titulo">
                <small>Bienvenidos a</small>
                <h1> DOLCATA</h1>
            </div>
        </div>
    );
}

export default NavBar;
