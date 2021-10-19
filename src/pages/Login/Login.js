import React from "react";
import "./Login.css";
import { Form, Button } from "react-bootstrap";
import UseFirebase from "../../Firebase/UseFirebase";

const Login = () => {
	const { googleSignIn } = UseFirebase();
	return (
		<div className="login-container">
			<div className="login-form mx-auto bg-light rounded">
				<Form>
					<h2 className="login-title text-center text-uppercase pb-3 fw-bold">
						Login here
					</h2>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Control type="email" placeholder="Enter email" />
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicCheckbox">
						<Form.Check type="checkbox" label="New here ?" />
					</Form.Group>
					<Button variant="primary" type="submit">
						Login
					</Button>
				</Form>
				<div className="login-with text-center">
					<p>Or register with</p>
					<div className="button-grp">
						<button className="btn-fb btn-all">Facebook</button>
						<button className="btn-google btn-all" onClick={googleSignIn}>
							Google
						</button>
						<button className="btn-github btn-all">Github</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
