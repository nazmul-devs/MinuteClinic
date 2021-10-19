import React from "react";
import { Col } from "react-bootstrap";
import "./BestService.css";

const BestService = ({ details }) => {
	const { name, img } = details;
	return (
		<Col>
			<div className="best-card text-center shadow d-flex align-items-center rounded px-2">
				<img src={img} className="rounded" alt="" />
				<h2 className="text-white fw-bold">{name}</h2>
			</div>
		</Col>
	);
};

export default BestService;
