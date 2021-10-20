import React from "react";
import { Container, Row } from "react-bootstrap";
import useServices from "../../Hooks/useServices";
import Service from "./Service/Service";

const Services = () => {
	const services = useServices();
	return (
		<Container>
			<Row xs={1} md={2} lg={3} className="g-5">
				{services.map((service) => (
					<Service key={service.id} service={service} />
				))}
			</Row>
		</Container>
	);
};

export default Services;
