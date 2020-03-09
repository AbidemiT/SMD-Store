import React, {useEffect, useContext} from 'react';
import ProductForm from "../products/ProductForm";
import AuthContext  from "../../context/Auth/authContext";

const AddProduct = () => {
    const authContext = useContext(AuthContext);
    const {loadUser} = authContext;
    useEffect(() => {
        loadUser();

        //eslint-disable-next-line
    }, [])
    return (
        <div className="addProduct">
            <ProductForm/>
        </div>
    )
}

export default AddProduct;
