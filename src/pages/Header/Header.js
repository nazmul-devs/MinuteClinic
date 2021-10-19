import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../img/logo.png";
import UseFirebase from "../../Firebase/UseFirebase";

const Header = () => {
	const { user, logout } = UseFirebase();
	return (
		<Navbar className="navbar">
			<Container>
				<Navbar.Brand as={Link} to="/">
					<img src={logo} width="70" alt="" />
				</Navbar.Brand>
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
						{user.displayName ? (
							<button className="logout-btn" onClick={logout}>
								<i class="fas fa-sign-out-alt"></i> Logout
							</button>
						) : (
							<Link to="/login" className="login-link rounded-pill">
								Login
							</Link>
						)}
					</Navbar.Text>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
