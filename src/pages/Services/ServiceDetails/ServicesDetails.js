import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";

const ServicesDetails = () => {
	const { serviceId } = useParams();
	const [services, setServices] = useState([]);
	useEffect(() => {
		fetch("/services.json")
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);
	console.log(services);
	return (
		<div>
			<h2>service details</h2>
			<h1>{serviceId}</h1>
		</div>
	);
};

export default ServicesDetails;
