import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar bg-primary box-shadow-nav">
            <h1 className=""><Link to="/"  className="link logo"><i className="fas fa-store-alt"></i>  <span className="text-light">SMD</span>Store</Link></h1>
            <ul className="menu">
                <li className="menu-list"><Link to="/"  className="link"><i className="fas fa-store-alt"></i>  Home</Link></li>
                <li className="menu-list"><Link to="/about" href="#!" className="link"><i className="fa fa-history" aria-hidden="true"></i> About</Link></li>
                <li className="menu-list"><Link to="/store" className="link"><i className="fas fa-mobile-alt"></i> Store</Link></li>
                <li className="menu-list"><Link to="/admin" className="link"><i className="fa fa-user" aria-hidden="true"></i> Admin</Link></li>
                <li className="menu-list"><Link to="/contact" className="link"><i className="fa fa-assistive-listening-systems" aria-hidden="true"></i> Contact</Link></li>
            </ul>
            <ul className="cart-menu">
                <li className="cart"><i className="fa fa-cart-plus" aria-hidden="true"></i> Cart</li>
            </ul>
        </nav>
    )
}

export default Navbar;
