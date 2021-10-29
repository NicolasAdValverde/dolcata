import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import logo from "../components/images/logo.png";
import dolcata from "../components/images/dolcata.png";
// import { CartIconLogo } from "../components/CartWidget";

function NavBar({ bienvenida, titulo, link1, link2, link3 }) {
    return (
        <div className="presentacion">
            <div className="NavBar">
                <div className="NavBar-div">
                    <img className="logo" src={logo} alt="logo" />
                    <img className="dolcata" src={dolcata} alt="logo" />
                </div>
                <nav className="navegacion">
                    <ul className="menu">
                        <li>
                            {" "}
                            <Link to="/">{link1}</Link>{" "}
                        </li>

                        <li>
                            {" "}
                            <Link to="/productos">{link2}</Link>{" "}
                        </li>
                        <ul className="submenu">
                            <li>
                                <Link> Subemenu 1</Link>
                            </li>
                            <li>
                                <Link> Subemenu 2</Link>
                            </li>
                            <li>
                                <Link> Subemenu 3</Link>
                            </li>
                            <li>
                                <Link> Subemenu 4</Link>
                            </li>
                        </ul>
                        <li>
                            {" "}
                            <Link to="/contacto">{link3}</Link>{" "}
                        </li>

                        <li>
                            <Link
                                to="/cart"
                                className="cartLogo"
                                href="https://google.com"
                            >
                                Cart
                            </Link>
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
