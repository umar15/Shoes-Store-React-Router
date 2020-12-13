import React from "react";
import { useParams } from "react-router-dom";
import shoes from "./../data.json";

const SingleProduct = () => {
	const { id } = useParams();
	const shoe = shoes[id];
	return (
		<div>
			<h1>Single Product Page</h1>
			<div className="link">
				<h3>{shoe.name}</h3>
				<img src={shoe.img} alt="shoe" height={800} />
			</div>
		</div>
	);
};

export default SingleProduct;
