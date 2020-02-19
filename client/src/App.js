import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Navbar from "../src/components/layout/Navbar";
import Home from "../src/components/pages/Home";
import Store from "./components/pages/Store";
import About from "../src/components/pages/About";
import Admin from "../src/components/pages/Admin";
import Contact from "../src/components/pages/Contact";
import SignUp from "../src/components/auth/SignUp";
import SignIn from "../src/components/auth/SignIn";

function App() {
  return (
    <div className="App">
      <Router>
        <Fragment>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/store" component={Store}/>
            <Route exact path="/admin" component={Admin}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/login" component={SignIn}/>
            <Route exact path="/register" component={SignUp}/>
          </Switch>
        </Fragment>
        
      </Router>
      
    </div>
  );
}

export default App;
