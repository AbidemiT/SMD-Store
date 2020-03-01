import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import CartContxet from "../../context/Cart/cartContext";

const Navbar = () => {
    const cartContext = useContext(CartContxet);
    const {carts} = cartContext;
    return (
        <nav className="navbar">
            <h1 className=""><Link to="/"  className="link logo"><i className="fas fa-store-alt"></i>  <span className="text-light">SMD</span>Store</Link></h1>
            <ul className="menu">
                <li className="menu-list"><Link to="/"  className="link"><i className="fas fa-store-alt"></i>  Home</Link></li>
                <li className="menu-list"><Link to="/about" className="link"><i className="fa fa-history" aria-hidden="true"></i> About</Link></li>
                <li className="menu-list"><Link to="/login" className="link"><i className="fas fa-chevron-circle-right    "></i> Login</Link></li>
                <li className="menu-list"><Link to="/register" className="link"><i className="fas fa-chevron-circle-right    "></i> Register</Link></li>
                <li className="menu-list"><Link to="/store" className="link"><i className="fas fa-mobile-alt"></i> Store</Link></li>
                <li className="menu-list"><Link to="/addproduct" className="link"><i className="fa fa-plus-square" aria-hidden="true"></i> New Product</Link></li>
                <li className="menu-list"><Link to="/admin" className="link"><i className="fa fa-user" aria-hidden="true"></i> Admin</Link></li>
                <li className="menu-list"><Link to="/contact" className="link"><i className="fa fa-assistive-listening-systems" aria-hidden="true"></i> Contact</Link></li>
            </ul>
            <ul className="cart-menu">
                <li className="cart"><Link to="/cart" ><i className="fa fa-cart-plus" aria-hidden="true"></i><span className="text-success"> {carts.length}</span>  </Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;
