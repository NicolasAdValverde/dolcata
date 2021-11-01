import "./App.css";
import "./components/style.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ItemDetailContainer } from "../src/components/containers/ItemdetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/containers/ItemListContainer/ItemListContainers";
import HomePresentacion from "./components/HomePresentacion";
import { NavBar } from "./components/NavBar/NavBar";

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
                <Route exact path="/">
                    <NavBar />
                    <ItemListContainer />
                </Route>
                <Route exact path="/productos/:id">
                    <NavBar />
                    <ItemListContainer />
                </Route>
                <Route exact path="/detalle">
                    <NavBar />
                    <ItemDetailContainer />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
