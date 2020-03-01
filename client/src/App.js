import React, { Fragment, useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import AuthState from "../src/context/Auth/AuthState";
import Navbar from "../src/components/layout/Navbar";
import Foot from "../src/components/layout/Foot";
import Cart from "../src/components/layout/Cart";
import Home from "../src/components/pages/Home";
import Store from "./components/pages/Store";
import About from "../src/components/pages/About";
import Admin from "../src/components/pages/Admin";
import Contact from "../src/components/pages/Contact";
import SignUp from "../src/components/auth/SignUp";
import SignIn from "../src/components/auth/SignIn";
import Product from "../src/components/products/Product";
import AddProduct from "../src/components/products/AddProduct";
import ProductState from "../src/context/Product/ProductState";
import CartState from "../src/context/Cart/CartState";
import AlertState from "../src/context/Alert/AlertState";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
          document.querySelector(".navbar").style.opacity = 1;
      } else {
          document.querySelector(".navbar").style.opacity = .8;
      }
  })
  }, [])

  return (
    <div className="App">
      <AuthState>
        <ProductState>
          <CartState>
            <AlertState>
              <Router>
                <Fragment>
                  <Navbar/>
                  <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/store" component={Store}/>
                    <Route exact path="/store/:id" render={props => (
                      <Fragment>
                        <Product {...props}/>
                      </Fragment>
                    )}/>
                    <Route exact path="/admin" component={Admin}/>
                    <Route exact path="/addproduct" component={AddProduct}/>
                    <Route exact path="/contact" component={Contact}/>
                    <Route exact path="/login" component={SignIn}/>
                    <Route exact path="/register" component={SignUp}/>
                    <Route exact path="/cart" component={Cart}/>
                  </Switch>
                  <Foot/>
                </Fragment>
              </Router>
            </AlertState>
          </CartState>
        </ProductState>
      </AuthState>
    </div>
  );
}

export default App;
