import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((cartItems) => cartItems.id == productToAdd.id)
    if (existingCartItem) {
        return cartItems.map((cartItems) => cartItems.id == productToAdd.id ?
        {...cartItems, quantity: cartItems.quantity + 1} 
        : cartItems
    )
    }
    console.log(cartItems)
    return [...cartItems, {...productToAdd, quantity: 1}]
}


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    setCartItems: () => {},
    cartCount : 0
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount);
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }
    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount}
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}