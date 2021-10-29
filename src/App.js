import "./App.css";
import { ItemDetailContainer } from "../src/components/containers/ItemdetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/containers/ItemListContainer/ItemListContainers";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <NavBar
                        bienvenida="Bienvenidos a"
                        titulo="DOLCATA"
                        link1="Home"
                        link2="Productos"
                        link3="Contacto"
                    />
                </Route>
                <Route exact path="/productos">
                    <ItemListContainer />
                </Route>
                <Route exact path="/contacto">
                    <ItemDetailContainer />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
