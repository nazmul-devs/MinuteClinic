import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
	return (
		<Navbar className="navbar">
			<Container>
				<Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse className="justify-content-end">
					<Navbar.Text className="d-flex align-items-center">
						<div className="nav-link me-3 ">
							<Link className="nav-items p-2 text-white" to="/">
								Home
							</Link>
							<Link className="nav-items p-2 text-white" to="/">
								Home
							</Link>
							<Link className="nav-items p-2 text-white" to="/">
								Home
							</Link>
							<Link className="nav-items p-2 text-white" to="/">
								Home
							</Link>
						</div>
						<Link to="login" className="login-link">
							Login
						</Link>
					</Navbar.Text>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
