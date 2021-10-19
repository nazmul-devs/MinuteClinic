import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../img/logo.png";

const Footer = () => {
	return (
		<div className="footer container-fluid text-center text-white">
			<div className="pt-4 px-2">
				<Row xs={1} sm={2} md={4} className="py-3">
					<Col className="bg-secondary px-3 py-2 rounded">
						<img src={logo} width="150" alt="" />
						<h2 className="fw-bold">Minute Clinic</h2>
					</Col>
					<Col>
						<h2>Company</h2>
						<a as={Link} className="d-block" to="/">
							Home
						</a>
						<a as={Link} className="d-block" to="/">
							About us
						</a>
						<a as={Link} className="d-block" to="/">
							News & Article
						</a>
					</Col>
					<Col>
						<h2>Support</h2>
						<a as={Link} className="d-block" to="/">
							Help Center
						</a>
						<a as={Link} className="d-block" to="/">
							FAQ
						</a>
						<a as={Link} className="d-block" to="/">
							Get an Appointment
						</a>
					</Col>
					<Col>
						<h2>Contact Info</h2>
						<p>
							<i class="fas fa-map-marker-alt footer-icon"></i> Banani
							Block-D, Road-14, House-04 Dhaka
						</p>
						<p>
							<i class="fas fa-envelope footer-icon"></i>{" "}
							support@domain.tld
						</p>
						<p>
							<i class="fas fa-phone-alt footer-icon"></i>{" "}
							+6221.2002.2012
						</p>
					</Col>
				</Row>
				<hr />
				<div className="copy-right">
					<div className="footer-link">
						<a as={Link} to="/">
							Patient Right & Advocacy
						</a>
						<a as={Link} to="/">
							Privacy Policy
						</a>
						<a as={Link} to="/">
							Cookie Policy
						</a>
						<a as={Link} to="/">
							Term of Use
						</a>
					</div>
					<p className="p-2 m-0">
						Copyright © 2021 Minute Clinic, All rights reserved.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
