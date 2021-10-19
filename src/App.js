import "./App.css";
import NavBar from "../src/components/NavBar";
import { ItemList } from "./components/containers/ItemListContainers";

function App() {
    return (
        <div className="App">
            <NavBar
                bienvenida="Bienvenidos a"
                titulo="DOLCATA"
                link1="Home"
                link2="Productos"
                link3="Contacto"
            />
            <ItemList greeting="ACA VAN A ESTAR LAS CARDS CON PRODUCTOS" />
        </div>
    );
}

export default App;
