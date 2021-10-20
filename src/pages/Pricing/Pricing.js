import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Pricing.css";
const Pricing = () => {
	return (
		<Container>
			<h2 className="text-center fw-bold my-5 price">Pricing</h2>
			<Row xs={1} md={2} lg={4} className="g-5 my-5">
				<Col>
					<h2 className="fw-bolder">Affordable Price for You</h2>
					<p className="text-muted">
						Believe in us, we won’t let you down
					</p>
				</Col>
				<Col>
					<div className="pricing-card text-center p-0">
						<h2 className="p-2 basic mx-4">Basic</h2>
						<h2 className="price my-4">$50</h2>
						<p className="text-muted">Per mounth</p>
						<button className="btn-price">Get Started</button>
					</div>
				</Col>
				<Col>
					<div className="pro-pricing-card text-center p-0">
						<h2 className="p-2 pro mx-4">Pro</h2>
						<h2 className="price text-white my-4">$99</h2>
						<p className="text-white">Per mounth</p>
						<button className="pro-btn">Get Started</button>
					</div>
				</Col>
				<Col>
					<div className="pricing-card text-center p-0">
						<h2 className="p-2 basic mx-4">Premium</h2>
						<h2 className="price my-4">$70</h2>
						<p className="text-muted">Per mounth</p>
						<button className="btn-price">Get Started</button>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Pricing;
