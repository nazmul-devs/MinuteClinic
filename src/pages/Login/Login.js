import React from "react";
import "./Login.css";
import { Form, Button, Container } from "react-bootstrap";
import UseAuth from "../../Hooks/UseAuth";

const Login = () => {
	const {
		googleSignIn,
		githubSignIn,
		handleEmail,
		handleName,
		hanldePass,
		handleCheck,
		isNew,
		createUser,
		newUser,
		error,
	} = UseAuth();

	console.log(newUser);

	return (
		<div className="login-container">
			<Container>
				<div className="login-form mx-auto bg-light min-w-50 rounded">
					<Form>
						<h2 className="login-title text-center text-uppercase pb-3 fw-bold">
							{isNew ? "Registration here" : "Login here"}
						</h2>
						<p className="text-center text-warning">{error}</p>
						{isNew && (
							<Form.Group
								className="mb-3"
								controlId="formBasicEmail"
								onBlur={handleName}
							>
								<Form.Control
									type="text"
									placeholder="Enter your name"
								/>
							</Form.Group>
						)}
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
							<Form.Check
								onClick={handleCheck}
								type="checkbox"
								label="New here ?"
							/>
						</Form.Group>
						<Button variant="primary" type="submit" onClick={createUser}>
							{isNew ? "Register" : "Login"}
						</Button>
					</Form>
					<div className="login-with text-center">
						<p>Or register with</p>
						<div className="button-grp">
							<button
								className="btn-google btn-all"
								onClick={googleSignIn}
							>
								Google
							</button>
							<button
								className="btn-github btn-all"
								onClick={githubSignIn}
							>
								Github
							</button>
							<button className="btn-fb btn-all">Facebook</button>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Login;
