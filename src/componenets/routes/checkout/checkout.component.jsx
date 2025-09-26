import { CartContext } from "../../contexts/cart.context"
import { useContext } from "react"
import './checkout.styles.scss';

import CartItem from "../../cart-item/cart-item.component"
const Checkout = () => {
    const { cartItems, addItemToCart, removeItemToCart, cartTotal } = useContext(CartContext)
    return (
        <div className="checkout-container">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
            <h1>Ready for Checkout?</h1>
            {cartItems.map((cartItem) => {
            const { id, name, quantity } = cartItem;
            return <div key={id}>
            <h2>{name}</h2> 
            <span>{quantity}</span>
            <br></br>
            <span onClick={() => removeItemToCart(cartItem)}>decrement</span>
            <br />
            <span onClick={() => addItemToCart(cartItem)}>increment</span>
            </div>})} 
            <span className="Total">Total: ${cartTotal}</span>
        </div>
    )
}

export default Checkout