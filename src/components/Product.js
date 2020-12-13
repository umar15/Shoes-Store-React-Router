import React from "react";
import shoes from "./../data.json";
import { Link } from "react-router-dom";

const Product = () => {
	return (
		<div>
			<h1>Our Products</h1>
			<div className="products">
				{Object.keys(shoes).map((keyname) => {
					const shoe = shoes[keyname];
					return (
						<Link
							className="link"
							key={keyname}
							to={`/product/${keyname}`}
						>
							<h4>{shoe.name}</h4>
							<img src={shoe.img} height={250} alt="shoe" />
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default Product;
