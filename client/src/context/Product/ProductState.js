import React, {useReducer} from "react";
import uuid from "uuid";
import ProductContext from "../../context/Product/productContext";
import ProductReducer from "../../context/Product/productReducer";
import PhoneImg from "./iphone-bg.jpg";
import {
    GET_PRODUCTS,
    GET_PRODUCT,
    ADD_PRODUCT,
    GET_LATEST_PRODUCTS,
    DELETE_PRODUCT,
    UPDATE_PRODUCT,
    CURRENT_PRODUCT,
    CLEAR_CURRENT,
    CLEAR_PRODUCT,
    PRODUCT_ERROR
} from "../types";

const ProductState = props => {
    const initialState = {
        products : [
            {
                id: "1",
                name: "Iphone 11 Pro",
                image: PhoneImg,
                brand: "Apple",
                price: 12000,
                quantity: 5,
                description: "A sleek top-notch mobile apple product"
            },
            {
                id: "2",
                name: "Samsung Galaxy Tab",
                image: PhoneImg,
                brand: "Samsung",
                price: 15000,
                quantity: 8,
                description: "A sleek top-notch mobile apple product"
            },
            {
                id: "3",
                name: "Nokia 3310",
                image: PhoneImg,
                brand: "Nokia",
                price: 2000,
                quantity: 0,
                description: "A sleek top-notch mobile apple product"
            },
            {   
                id: "4",
                name: "Infinix HOT 8",
                image: PhoneImg,
                brand: "Infinix",
                price: 36000,
                quantity: 5,
                description: "A sleek top-notch mobile apple product"
            },
            {   
                id: "5",
                name: "Tecno Camon 8",
                image: PhoneImg,
                brand: "Tecno",
                price: 36000,
                quantity: 0,
                description: "A sleek top-notch mobile apple product"
            },
            {   
                id: "6",
                name: "Tecno Camon 11",
                image: PhoneImg,
                brand: "Tecno",
                price: 40000,
                quantity: 4,
                description: "A sleek top-notch mobile apple product"
            },
            {   
                id: "7",
                name: "Tecno Pavilon",
                image: PhoneImg,
                brand: "Tecno",
                price: 45000,
                quantity: 6,
                description: "A sleek top-notch mobile apple product"
            },
        ],
        product: {},
        latestProducts: []
    }

    const [state, dispatch] = useReducer(ProductReducer,initialState);

    // Actions

    // Add Product
    const addProduct = product => {
        product.id = uuid.v4();
        product.price = Number(product.price);
        dispatch({type: ADD_PRODUCT, payload: product});
    }

    // Get Products
    const getProducts = () => {
        dispatch({type: GET_PRODUCTS})
    }

    // Get Product
    const getProduct = id => {
        dispatch({type: GET_PRODUCT, payload: id });
    }

    // Get latest product
    const getLatestProducts = () => {
        dispatch({type: GET_LATEST_PRODUCTS});
    }

    // Update Product

    // Delete Product

    // set Current Product

    return (
        <ProductContext.Provider value={{
            products: state.products,
            product: state.product,
            latestProducts: state.latestProducts,
            getLatestProducts,
            getProducts,
            getProduct,
            addProduct
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductState;