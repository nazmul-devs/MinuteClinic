import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../img/logo.png";
import UseAuth from "../../Hooks/UseAuth";

const Header = () => {
	const { user, logout } = UseAuth();
	console.log(user.photoURL);
	return (
		<Navbar className="navbar" collapseOnSelect expand="lg">
			<Container>
				<Navbar.Brand as={Link} to="/">
					<img src={logo} width="70" alt="" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse
					className="justify-content-end"
					id="responsive-navbar-nav"
				>
					<Navbar.Text className="d-md-flex align-items-center text-center ">
						<div className="nav-link me-3 d-md-flex">
							<Link className="nav-items p-2 text-white d-block" to="/">
								Home
							</Link>
							<Link
								className="nav-items p-2 text-white d-block"
								to="/pricing"
							>
								Pricing
							</Link>
							<Link className="nav-items p-2 text-white d-block" to="/">
								Home
							</Link>
							<Link className="nav-items p-2 text-white d-block" to="/">
								Home
							</Link>
						</div>
						{user.displayName ? (
							<>
								{user.photoUrl ? (
									<img
										src={user.photoURL}
										width="60"
										height="60"
										alt=""
										className="rounded-circle mx-3"
									/>
								) : (
									<h5 className="text-white text-uppercase p-1 me-2 mt-2 rounded-pill border">
										{user.displayName}
									</h5>
								)}
								<button className="logout-btn" onClick={logout}>
									<i className="fas fa-sign-out-alt"></i> Logout
								</button>
							</>
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
