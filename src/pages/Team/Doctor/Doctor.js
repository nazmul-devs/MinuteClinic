import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Doctor = ({ doctor }) => {
	const { name, img, specilist } = doctor;
	return (
		<Col>
			<div className="card border-0 rounded-0 shadow text-center text-uppercase">
				<img src={img} height="170" alt="" />
				<h5 className="tw-bold">{name}</h5>
				<p className="m-0 p-0" style={{ color: "#0076EF" }}>
					{specilist}
				</p>
				<div className="social my-3">
					<a href="#" className="mx-2">
						<i className="fab fa-facebook-f"></i>
					</a>
					<a href="#" className="mx-2">
						<i className="fab fa-twitter"></i>
					</a>
					<a href="#" className="mx-2">
						<i className="fab fa-linkedin-in"></i>
					</a>
				</div>
			</div>
		</Col>
	);
};

export default Doctor;
