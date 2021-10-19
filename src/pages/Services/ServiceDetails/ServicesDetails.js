import React from "react";
import "./ServiceDetails.css";
import { useState } from "react";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";

const ServicesDetails = () => {
	const { serviceId } = useParams();
	const [services, setServices] = useState([]);
	useEffect(() => {
		fetch("/services.json")
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);

	const serviceDetails = services.find((svs) => svs.id === serviceId);
	// const { name, img, des } = serviceDetails;

	return (
		<Container>
			<div className="details-card w-75 mx-auto my-5">
				<img src={serviceDetails?.img} alt="" />
				<h2 className="my-3 fw-bold" style={{ color: "#42b3e5" }}>
					{serviceDetails?.name}
				</h2>
				<p className="text-muted">{serviceDetails?.des}</p>
			</div>
		</Container>
	);
};

export default ServicesDetails;
