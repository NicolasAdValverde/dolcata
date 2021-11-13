import CartContextProvider from "./components/Contexts/CartContext";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ItemDetailContainer } from "./components/Detail/ItemdetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/Items/ItemListContainer/ItemListContainers";
import { Contacto } from "./components/Landing/Contacto/Contacto";
import { Cart } from "./components/Detail/Cart/Cart";
import HomePresentacion from "./components/Landing/Home/HomePresentacion";

import "./App.css";
import "./components/style.css";

function App() {
    return (
        <CartContextProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <HomePresentacion
                            bienvenida="Bienvenidos a"
                            titulo="Dolcata"
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

                    <Route exact path="/cart">
                        <Cart />
                    </Route>
                </Switch>
            </BrowserRouter>
        </CartContextProvider>
    );
}

export default App;
