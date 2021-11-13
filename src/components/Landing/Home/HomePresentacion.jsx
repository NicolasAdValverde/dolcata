import React from "react";
import { NavBar } from "../../NavBar/NavBar";
import "../../../components/style.css";
import Typed from "typed.js";

function HomePresentacion({ bienvenida, titulo }) {
    const el = React.useRef(null);

    const typed = React.useRef(null);

    React.useEffect(() => {
        const options = {
            strings: [
                "<i>Sin mi café  de la mañana, soy sólo como una pieza dorada y seca de carnero.</i> <strong>Johann Sebastian Bach</strong>",
                "<i>No hay nada como una taza de café para estimular las células del cerebro.</i> <strong> Sherlock Holmes </strong>",
                "<i>El café es un bálsamo para el corazón y el espíritu</i>. <strong>Giuseppe Verdi</strong>",
                "<i>La amistad es como el café, una vez frío nunca vuelve a su sabor original, aún si es recalentado.<i>  <strong>Kant</strong>",
            ],
            typeSpeed: 60,
            backSpeed: 30,
        };

        typed.current = new Typed(el.current, options);

        return () => {
            typed.current.destroy();
        };
    }, []);

    return (
        <div className="presentacion">
            <NavBar />
            <small className="subtitulo"> {bienvenida}</small>
            <div className="titulo">
                <h1> {titulo}</h1>
            </div>
            <div className="typed-container">
                <span
                    className="typed"
                    style={{ whiteSpace: "pre" }}
                    ref={el}
                />
            </div>
        </div>
    );
}

export default HomePresentacion;
