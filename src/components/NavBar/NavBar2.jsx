import React from "react";
import { Link } from "react-router-dom";
import { CartIconLogo } from "../CartWidget";

export const NavBar2 = () => {
    return (
        <div>
            <nav className="navegacion">
                <ul className="menu">
                    <li>
                        {" "}
                        <Link className="Link" to="/">
                            Home
                        </Link>{" "}
                    </li>

                    <li>
                        {" "}
                        <Link className="Link" to="/productos">
                            productos
                        </Link>{" "}
                        <ul className="submenu">
                            <li>
                                <Link to="/id"> Home</Link>
                            </li>
                            <li>
                                <Link to="/id"> Tazas</Link>
                            </li>
                            <li>
                                <Link to="/id"> Subemenu 3</Link>
                            </li>
                            <li>
                                <Link to="/id"> Subemenu 4</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link className="Link" to="/contacto">
                            contacto
                        </Link>
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
