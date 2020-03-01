import {GET_PRODUCTS,GET_PRODUCT, ADD_PRODUCT, GET_LATEST_PRODUCTS} from "../types";

export default (state, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        case GET_PRODUCTS:
            return {
                ...state,
                products: state.products
            }
        case GET_LATEST_PRODUCTS:
            return {
                ...state,
                latestProducts: state.products.slice(Math.max(state.products.length - 6, 0)) 
            }
        case GET_PRODUCT:
            return {
                ...state,
                product: state.products.filter(product => product.id === action.payload)[0]
            }
    
        default:
            return state;
    }
}