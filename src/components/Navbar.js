import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="navbar">
			<Router>
				<Link to="/" className="navitem">
					Home
				</Link>
				|
				<Link to="/about" className="navitem">
					About
				</Link>
				|
				<Link to="/product" className="navitem">
					Products
				</Link>
			</Router>
		</div>
	);
};

export default Navbar;
