import React from "react";
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
                            <a href="https://google.com">{link1}</a>
                            <a href="https://google.com">{link2}</a>
                            <a href="https://google.com">{link3}</a>
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
