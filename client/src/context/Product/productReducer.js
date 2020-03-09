import {GET_PRODUCTS,GET_PRODUCT, ADD_PRODUCT, GET_LATEST_PRODUCTS, PRODUCT_ERROR} from "../types";

export default (state, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload],
                product: {...action.payload}
            }
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case GET_LATEST_PRODUCTS:
            return {
                ...state,
                latestProducts: action.payload 
            }
        case GET_PRODUCT:
            return {
                ...state,
                product: action.payload
            }
        case PRODUCT_ERROR:
            return {
                ...state,
                errors: action.payload
            }
    
        default:
            return state;
    }
}