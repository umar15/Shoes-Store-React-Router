import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import SingleProduct from "./components/SingleProduct";

const Routes = () => {
	return (
		<div>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route exact path="/product" component={Product} />
					<Route path="/product/:id" component={SingleProduct} />
					<Route path="*" component={() => <h2>404 not found!</h2>} />
				</Switch>
			</Router>
		</div>
	);
};

export default Routes;
