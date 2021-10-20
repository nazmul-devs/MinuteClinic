import React, { useState } from "react";
import "./Login.css";
import { Form, Button } from "react-bootstrap";
import UseFirebase from "../../Firebase/UseFirebase";

const Login = () => {
	const { googleSignIn, githubSignIn } = UseFirebase();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");

	const handleName = (e) => {
		setName(e.target.value);
	};

	const handleEmail = (e) => {
		setEmail(e.target.value);
	};
	const hanldePass = (e) => {
		setPass(e.target.value);
	};
	console.log(name);
	return (
		<div className="login-container">
			<div className="login-form mx-auto bg-light rounded">
				<Form>
					<h2 className="login-title text-center text-uppercase pb-3 fw-bold">
						Login here
					</h2>
					<Form.Group
						className="mb-3"
						controlId="formBasicEmail"
						onBlur={handleName}
					>
						<Form.Control type="text" placeholder="Enter your name" />
					</Form.Group>
					<Form.Group
						className="mb-3"
						controlId="formBasicEmail"
						onBlur={handleEmail}
					>
						<Form.Control type="email" placeholder="Enter email" />
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Control
							type="password"
							placeholder="Password"
							onBlur={hanldePass}
						/>
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
						<button className="btn-google btn-all" onClick={googleSignIn}>
							Google
						</button>
						<button className="btn-github btn-all" onClick={githubSignIn}>
							Github
						</button>
						<button className="btn-fb btn-all">Facebook</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
