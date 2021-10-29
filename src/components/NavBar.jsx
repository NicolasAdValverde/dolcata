import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import logo from "../components/images/logo.png";
import dolcata from "../components/images/dolcata.png";
import { CartIconLogo } from "../components/CartWidget";

function NavBar({ bienvenida, titulo, link1, link2, link3 }) {
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
                            <Link to="/">{link1}</Link>
                            <Link to="/productos">{link2}</Link>

                            <Link to="/contacto">{link3}</Link>
                        </li>
                        <li>
                            <a className="cartLogo" href="https://google.com">
                                {" "}
                                <CartIconLogo />{" "}
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="titulo">
                <small> {bienvenida}</small>
                <h1> {titulo}</h1>
            </div>
        </div>
    );
}

export default NavBar;
