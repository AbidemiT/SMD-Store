import React, {useContext} from 'react';
import CartContext from "../../context/Cart/cartContext";

const CartItem = ({item}) => {
    const cartContext = useContext(CartContext);
    const {deleteFromCart} = cartContext;
    const {name, price, brand, quantity, image,description, id} = item;

    const deleteFunc = () => {
        deleteFromCart(id);
    }

    function encode(data) {
        var str = String.fromCharCode.apply(null,data);
        return btoa(str).replace(/.{76}(?=.)/g,'$&\n');
    }

    return (
        <div className="cart-view">
            <div className="product-img">
                    <img src={`data:image/jpg;base64,${encode(image.data)}`} alt={`${name}`}/>
                </div>
                <div className="inner-contents p-1">
                    <h2>{name}</h2>
                    <h4>Price: <span role="img" aria-label="mark">💲</span>{price}</h4>
                    <h5>Brand: {brand}</h5>
                    {quantity && quantity > 0 ? <h6>Available <span role="img" aria-label="mark">✔</span></h6> : <h6>Out of Stock <span role="img" aria-label="mark">❌</span></h6> }
                    <p>Description: {description}</p>
                </div>
                <div className="del"><button className="btn-danger btn-inline mr2 text-light brs-circle text-center" onClick={deleteFunc}><span role="img" aria-label="mark">❌</span></button></div>
        </div>
    )
}

export default CartItem
