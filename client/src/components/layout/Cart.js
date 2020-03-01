import React, {useEffect, useContext} from 'react';
import CartContext from "../../context/Cart/cartContext";
import CartItem from "./CartItem";

const Cart = () => {
    const cartContext = useContext(CartContext);
    const {carts, clearCart} = cartContext;

    const clear = () => {
        clearCart();
    }

    let total = 0;

    if (carts.length <= 0) {
        return (<div id="cart" className="text-center my-2"><h3> Your Cart is empty</h3></div>)
    } else {
        return (
            <div id="cart" className="container my-2">
                {carts.map(cart => (<CartItem key={cart.id} item={cart}></CartItem>))}
                <h3 className="text-center">{carts.filter(cart => {
                    total += cart.price
                })} Total: {total ? total : 0}</h3>
                <div className="text-center"><button className="btn-danger btn-inline mr2 text-light" onClick={clear}>Clear Cart</button></div>
            </div>
        )
    }


}

export default Cart;
