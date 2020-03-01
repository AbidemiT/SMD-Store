import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import CartContext from "../../context/Cart/cartContext";

const ProductItems = ({product}) => {
    const {name, brand, description, image, quantity, price,id} = product;
    const cartContext = useContext(CartContext);
    const {addToCart} = cartContext;

    const toCart = () => {
        addToCart(product);
    }

    return (
        
            <div className="product box-shadow-product">
                <div className="product-img">
                    <Link to={`/store/${id}`}><img src={image} alt={`${name}`}/></Link>
                </div>
                <div className="inner-contents p-1">
                    <h2>{name}</h2>
                    <h4>Price: <span role="img" aria-label="mark">💲</span>{price}</h4>
                    <h5>Brand: {brand}</h5>
                    {quantity && quantity > 0 ? <h6>Available <span role="img" aria-label="mark">✔</span></h6> : <h6>Out of Stock <span role="img" aria-label="mark">❌</span></h6> }
                    <p>Description: {description}</p>
                    {quantity && quantity > 0 ?  <Link to="/cart" onClick={toCart} className="btn-inline my-1 btn-primary brs">Add to Cart</Link> : <button className="btn-inline my-1 btn-primary bg-fade no-e brs">Out of Stock</button>}
                </div>
            </div>
    )
}

export default ProductItems;
