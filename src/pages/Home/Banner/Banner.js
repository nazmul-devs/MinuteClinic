import React from "react";
import "./Banner.css";
import banner2 from "../../../img/banner/banner-2.png";

const Banner = () => {
	return (
		<div>
			<img
				className="d-block w-100 banner-img"
				src={banner2}
				alt="Second slide"
			/>
		</div>
	);
};

export default Banner;
