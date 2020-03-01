import React, {useContext} from 'react';
import ProductItem from "./ProductItems";
import ProductContext from "../../context/Product/productContext";

const Products = () => {
    const productContext = useContext(ProductContext);
    const {products} = productContext;
    return (
        <div className="container">
            <div className="products-container">
                {products.map(product => <ProductItem key={product.id} product={product}/>)}
            </div>
        </div>
    )
}

export default Products
