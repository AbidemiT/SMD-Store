import React, {useContext, useEffect, useLayoutEffect} from 'react';
import {Link} from "react-router-dom";
import ProductContext from "../../context/Product/productContext";
import CartContext from "../../context/Cart/cartContext";

const Product = ({match}) => {
    const productContext = useContext(ProductContext);
    const {product, getProduct} = productContext;
    const cartContext = useContext(CartContext);
    const {addToCart} = cartContext;

    useEffect(() => {
        getProduct(match.params.id);

        // eslint-disable-next-line
    }, [match.params]);
    
    const toCart = () => {
        addToCart(product);
    }
    function encode(data) {
        var str = String.fromCharCode.apply(null,data);
        return btoa(str).replace(/.{76}(?=.)/g,'$&\n');
    }

    const {name,brand,quantity,description,price,image} = product;
    
    return (
        <div className="single_product-container">
            <div className="product bg-light box-shadow-product">
            <div className="product-img">
                {image && <img src={`data:image/jpg;base64,${encode(image.data)}`} alt={`${name}`}/>}         
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
