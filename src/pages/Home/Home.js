import React from "react";
import Services from "../Services/Services";
import Banner from "./Banner/Banner";

const Home = () => {
	return (
		<div>
			<Banner />
			<div className="services my-4">
				<div className="text-center my-4">
					<h2 className="fs-5">Our services</h2>
					<h2 className="fw-bold">
						High Quality{" "}
						<span style={{ color: "#42b3e5" }}>Services</span>
					</h2>
					<p className="w-50 mx-auto">
						Minute Clinic Are A Professional Medical & Health Care
						Services Provider Institutions. Suitable For Hospitals,
						Dentists, Gynecologists, Physiatrists.
					</p>
				</div>
				<Services />
			</div>
		</div>
	);
};

export default Home;
