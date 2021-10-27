import "./App.css";
import { ItemListContainer } from "./components/containers/ItemListContainer/ItemListContainers";
import NavBar from "./components/NavBar";

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
            <ItemListContainer />
        </div>
    );
}

export default App;
