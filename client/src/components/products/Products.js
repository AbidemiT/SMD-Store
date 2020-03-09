import React, {useContext, useEffect} from 'react';
import ProductItem from "./ProductItems";
import ProductContext from "../../context/Product/productContext";

const Products = () => {
    const productContext = useContext(ProductContext);
    const {products, getProducts} = productContext;

    useEffect(() => {
        getProducts();
        // eslint-disable-next-line
    }, []);
    return (
        <div className="container">
            <div className="products-container">
                {products.map(product => <ProductItem key={product._id} product={product}/>)}
            </div>
        </div>
    )
}

export default Products
