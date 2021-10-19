import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
	const { name, img, des, id } = service;
	return (
		<Col>
			<Card className="border-0 service-card p-2">
				<Card.Img
					className="mx-auto rounded-circle card-img"
					src={img}
					style={{ width: "220px" }}
					height="220"
				/>
				<Card.Body>
					<Card.Title className="text-center service-title">
						{name}
					</Card.Title>
					<Card.Text style={{ textAlign: "justify", color: "gray" }}>
						{des.slice(0, 100)}
					</Card.Text>
					<Link to={`/details/${id}`}>
						<button className="btn-details ">Details</button>
					</Link>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default Service;
