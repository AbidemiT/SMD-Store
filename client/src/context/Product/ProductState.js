import React, {useReducer} from "react";
import uuid from "uuid";
import axios from "axios";
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
        products : [],
        product: {},
        latestProducts: [],
        errors:null 
    }

    const [state, dispatch] = useReducer(ProductReducer,initialState);

    // Actions

    // Add Product
    const addProduct = async (body, image) => {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        const imageConfig = {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }
        body.price = Number(body.price);
        const url = "/api/products"
        const url2 = "/api/product/image";
         try {
             
            const res = await axios.post(url, body, config);
            const fd = new FormData();
            fd.append("id", res.data._doc._id);
            fd.append("image", image);
            const resImage = await axios.post(url2, fd, imageConfig);
            dispatch({type: ADD_PRODUCT, payload: resImage.data.product});
             
         } catch (error) {
             dispatch({type: PRODUCT_ERROR, payload: error.response.data.err});
            console.log(error)
         }
    }

    // Get Products
    const getProducts = async () => {
        let url = "/api/products/all";

        try {
            const res = await axios.get(url);
            dispatch({type: GET_PRODUCTS, payload: res.data.products});
        } catch (error) {
            dispatch({type: PRODUCT_ERROR, payload: error.response.data.err});
        } 
    }

    // Get Product
    const getProduct = async id => {
        const url = `/api/product/${id}`;

        try {
            const res = await axios.get(url);
            dispatch({type: GET_PRODUCT, payload: res.data.product });
        } catch (error) {
            dispatch({type: PRODUCT_ERROR, payload: error.response.data.err});
        }
        
    }

    // Get latest product
    const getLatestProducts = async() => {
        let url = "/api/products/latest";

        try {
            const res = await axios.get(url);
            dispatch({type: GET_LATEST_PRODUCTS, payload: res.data.products}); 
        } catch (error) {
            dispatch({type: PRODUCT_ERROR, payload: error.response.data.err});
        }
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