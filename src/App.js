import "./App.css";
import "./components/style.css";
import { ItemDetailContainer } from "../src/components/containers/ItemdetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/containers/ItemListContainer/ItemListContainers";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import NavBar from "./components/NavBar";
import { NavBar2 } from "./components/NavBar/NavBar2";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    {/* <NavBar
                        bienvenida="Bienvenidos a"
                        titulo="DOLCATA"
                        link1="Home"
                        link2="Productos"
                        link3="Contacto"
                    /> */}
                    <NavBar2 />
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
