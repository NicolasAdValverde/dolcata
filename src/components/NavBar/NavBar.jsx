import React from "react";
import { Link } from "react-router-dom";
import { CartIconLogo } from "../CartWidget";
import logo from "../../components/images/logo.png";

export const NavBar = () => {
    return (
        <div className="NavBar">
            <div className="NavBar-div">
                <img className="logo" src={logo} alt="logo" />
            </div>
            <nav className="navegacion">
                <ul className="menu">
                    <li>
                        {" "}
                        <Link to="/">Home</Link>{" "}
                    </li>

                    <li>
                        {" "}
                        <Link to="/productos">Productos</Link>{" "}
                        <ul className="submenu">
                            <li>
                                <Link to="/id"> Café en capsulas</Link>
                            </li>
                            <li>
                                <Link to="/id"> Café en granos</Link>
                            </li>
                            <li>
                                <Link to="/id"> Filtros</Link>
                            </li>
                            <li>
                                <Link to="/id"> Vasos Termicos</Link>
                            </li>
                            <li>
                                <Link to="/id"> Cafeteras</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/contacto">Contacto</Link>
                    </li>

                    <li>
                        <Link
                            to="/cart"
                            className="Link cartLogo"
                            href="https://google.com"
                        >
                            <CartIconLogo />
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
