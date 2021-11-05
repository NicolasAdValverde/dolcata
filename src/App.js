import "./App.css";
import "./components/style.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ItemDetailContainer } from "../src/components/containers/ItemdetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/containers/ItemListContainer/ItemListContainers";
import HomePresentacion from "./components/HomePresentacion";
import { NavBar } from "./components/NavBar/NavBar";
import { Contacto } from "./components/Contacto/Contacto";
import { Cart } from "./components/Cart/Cart";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePresentacion
                        bienvenida="Bienvenidos a"
                        titulo="DOLCATA"
                    />
                </Route>
                <Route exact path="/productos">
                    <ItemListContainer />
                </Route>
                <Route exact path="/productos/:id">
                    <ItemListContainer />
                </Route>
                <Route exact path="/producto/:prodId">
                    <ItemDetailContainer />
                </Route>
                <Route exact path="/contacto">
                    <Contacto />
                </Route>
                <Route>
                    <Cart />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
