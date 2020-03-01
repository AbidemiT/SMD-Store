import React, {useContext, useEffect} from 'react';
import {Link} from "react-router-dom";
import ProductContext from "../../context/Product/productContext";
import CartContext from "../../context/Cart/cartContext";

const Product = ({match}) => {
    const productContext = useContext(ProductContext);
    const cartContext = useContext(CartContext);
    const {addToCart} = cartContext;
    const {product, getProduct} = productContext;
    
    useEffect(() => {
        getProduct(match.params.id);

        // eslint-disable-next-line
    }, [match.params]);

    const {name,brand,quantity,description,price,image} = product;

    const toCart = () => {
        addToCart(product);
    }
    return (
        <div className="single_product-container">
            <div className="product bg-light box-shadow-product">
            <div className="product-img">
                <img src={image} alt={`${name}`}/>
            </div>
            <div className="inner-contents p-1">
                <h2>{name}</h2>
                <h4>Price: <span role="img" aria-label="Dollar">💲</span>{price}</h4>
                <h5>Brand:{brand}</h5>
                {quantity && quantity > 0 ? <h6>Available <span role="img" aria-label="mark">✔</span></h6> : <h6>Out of Stock <span role="img" aria-label="mark">❌</span></h6> }
                <p>Description: {description}</p>
                {quantity && quantity > 0 ?  <Link to="/cart" onClick={toCart} className="btn-inline my-1 btn-primary brs">Add to Cart</Link> : <button className="btn-inline my-1 btn-primary bg-fade no-e brs">Out of Stock</button>}
            </div>
        </div>
        </div>
    )
}

export default Product;
