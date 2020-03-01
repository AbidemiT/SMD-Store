import React, { useReducer } from "react";
import CartReducer from "./cartReducer";
import CartContext from "./cartContext";
import uuid from "uuid";
import {ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, GET_CART} from "../types";

const CartState = props => {
    const initialState = {
        carts: []
    }

    const [state, dispatch] = useReducer(CartReducer, initialState);

    // Actions

    // Add to cart
    const addToCart = product => {
        product.id = uuid.v4();
        dispatch({type: ADD_TO_CART, payload: product})
    }

    // Delete From Cart
    const deleteFromCart = id => {
        dispatch({type: REMOVE_FROM_CART, payload: id})
    }

    // get Cart
    const getCart = () => {
        dispatch({type: GET_CART})
    }

    // Clear Cart
    const clearCart = () => {
        dispatch({type: CLEAR_CART})
    }

    return (
        <CartContext.Provider value={{
            carts: state.carts,
            getCart,
            addToCart,
            deleteFromCart,
            clearCart
        }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartState;
