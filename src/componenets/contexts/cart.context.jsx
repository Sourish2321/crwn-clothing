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
const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find((cartItems) => cartItems.id == cartItemToRemove.id)

    if(existingCartItem.quantity == 1) {
        return cartItems.filter(cartItems => cartItems.id !== cartItemToRemove.id)
    }
    return cartItems.map((cartItems => cartItems.id == cartItemToRemove.id ?
       {...cartItems, quantity:  cartItems.quantity - 1}
      : cartItems
    ))
}

const clearCartItem = (cartItems, cartItemToRemove, ) => {
    return cartItems.filter(cartItems => cartItems.id !== cartItemToRemove.id)
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    setCartItems: () => {},
    cartCount : 0,
    clearCartFromItem: () => {},
    cartTotal : 0
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount)
    }, [cartItems])

     useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
        setCartTotal(newCartTotal)
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }
     const removeItemToCart = (productToAdd) => {
        setCartItems(removeCartItem(cartItems, productToAdd))
    }
    const clearCartFromItem = (productToClear) => {
        setCartItems(clearCartItem(cartItems, productToClear))
    }
    const value = {isCartOpen, clearCartFromItem, removeItemToCart , setIsCartOpen, addItemToCart, cartItems, cartCount, cartTotal}
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}