import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCartContext = () => {
    return useContext(CartContext);
};

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);
    // Estado interno del cartContextProvider

    const addToCartList = (itemAdded) => {
        const findItem = cartList.find(
            (itemInCart) => itemInCart.detail.id === itemAdded.detail.id
        );
        if (findItem) {
            findItem.quantity = findItem.quantity + itemAdded.quantity;
            setCartList(cartList);
        } else {
            setCartList((previousItems) => [...previousItems, itemAdded]);
        }
    };

    const removeItem = (idItemToRemove) => {
        setCartList(
            cartList.filter(
                (itemSearched) => itemSearched.detail.id !== idItemToRemove
            )
        );
    };

    const clearCart = () => {
        setCartList([]);
    };

    return (
        <CartContext.Provider
            value={{
                cartList,
                addToCartList,
                clearCart,
                removeItem,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
