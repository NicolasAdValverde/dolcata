import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCartContext = () => {
    return useContext(CartContext);
};

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);
    const [itemQuantity, setItemQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    // Estado interno del cartContextProvider

    const addToCartList = (itemAdded) => {
        setItemQuantity(itemQuantity + itemAdded.quantity);
        setTotalPrice(totalPrice + itemAdded.detail.price * itemAdded.quantity);

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
        const itemToRemove = cartList.find(
            (itemInCart) => itemInCart.detail.id === idItemToRemove
        );
        setItemQuantity(itemQuantity - itemToRemove.quantity);
        setTotalPrice(
            totalPrice - itemToRemove.detail.price * itemToRemove.quantity
        );

        setCartList(
            cartList.filter(
                (itemSearched) => itemSearched.detail.id !== idItemToRemove
            )
        );
    };

    const clearCart = () => {
        setItemQuantity(0);
        setTotalPrice(0);
        setCartList([]);
    };

    return (
        <CartContext.Provider
            value={{
                cartList,
                addToCartList,
                clearCart,
                removeItem,
                itemQuantity,
                totalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
