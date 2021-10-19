import React from "react";
import { Container, Row } from "react-bootstrap";
import useServices from "../../Hooks/useServices";
import Service from "./Service/Service";

const Services = () => {
	const services = useServices();
	return (
		<Container>
			<Row xs={1} sm={2} md={3} className="g-5">
				{services.map((service) => (
					<Service key={service.id} service={service} />
				))}
			</Row>
		</Container>
	);
};

export default Services;
