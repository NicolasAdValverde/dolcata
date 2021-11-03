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
                    <NavBar />
                    <ItemListContainer />
                </Route>
                <Route exact path="/productos/:id">
                    <NavBar />
                    <ItemListContainer />
                </Route>
                <Route exact path="/producto/:prodId">
                    <NavBar />
                    <ItemDetailContainer />
                </Route>
                <Route exact path="/contacto">
                    <NavBar />
                    <Contacto />
                </Route>
                <Route>
                    <NavBar />
                    <Cart />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
