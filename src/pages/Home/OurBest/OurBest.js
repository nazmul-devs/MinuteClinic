import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import useOurBest from "../../../Hooks/useOurBest";
import BestService from "./BestService/BestService";

const OurBest = () => {
	const bestServices = useOurBest();
	return (
		<Container>
			<h2 className="text-center fw-bold my-5" style={{ color: "#42b3e5" }}>
				Why Choose Minute Clinic ?
			</h2>
			<Row xs={1} sm={2} className="g-5 mb-3">
				{bestServices.map((Details) => (
					<BestService key={Details.id} details={Details} />
				))}
			</Row>
		</Container>
	);
};

export default OurBest;
