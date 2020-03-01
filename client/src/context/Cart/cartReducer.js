import {ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, GET_CART}  from "../types";

export default (state, action) => {
    switch (action.type) {
        case ADD_TO_CART:
           return {
               ...state,
               carts: [...state.carts, action.payload]
           }
        case REMOVE_FROM_CART:
           return {
               ...state,
               carts: state.carts.filter(cart => cart.id !== action.payload)
           }

        case GET_CART:
            return {
                ...state,
                carts: state.carts
            }
    
        case CLEAR_CART:
            return {
                ...state,
                carts: []
            }
    
        default:
            return state;
    }
}