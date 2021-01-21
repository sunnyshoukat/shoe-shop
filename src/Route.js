import React from 'react';
import Home from './components/Home';
import Product from './components/Product';
import ProductItem from './components/ProductItem';
import About from './components/About';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function RouteConfig() {
  return (
    <div>
        <Router>
            <NavBar/>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/product" component={Product}></Route>
                <Route path="/product/:id" component={ProductItem}></Route>
                <Route path="/contact" component={Contact}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="*" component={()=><h1>404 Not Found</h1>}></Route>
            </Switch>
        </Router>
    </div>
  );
}

export default RouteConfig;
