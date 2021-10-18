import React from "react";
import "./Banner.css";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../img/banner/banner-1.jpg";
import banner2 from "../../../img/banner/banner-2.png";
import banner3 from "../../../img/banner/banner-3.jpg";

const Banner = () => {
	return (
		<Carousel>
			<Carousel.Item>
				<img
					className="d-block w-100 banner-img"
					src={banner1}
					alt="First slide"
				/>
				<Carousel.Caption className="banner-text">
					<h3 className="title">Be Attentive to Youe Health Care</h3>
					<p className="text">
						MedHealth are a Professional Medical and Health Services
						Provider Institution.Suitable for Hospital , Dentists,
						Geynocologist, Physiatrists.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100 banner-img"
					src={banner2}
					alt="Second slide"
				/>

				<Carousel.Caption className="banner-text">
					<h3 className="title">Best care and batter doctora</h3>
					<p className="text">
						MedHealth are a Professional Medical and Health Services
						Provider Institution.Suitable for Hospital , Dentists,
						Geynocologist, Physiatrists.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100 banner-img"
					src={banner3}
					alt="Third slide"
				/>

				<Carousel.Caption className="banner-text">
					<h3 className="title">Commited to trusted dental care</h3>
					<p className="text">
						MedHealth are a Professional Medical and Health Services
						Provider Institution.Suitable for Hospital , Dentists,
						Geynocologist, Physiatrists.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};

export default Banner;
