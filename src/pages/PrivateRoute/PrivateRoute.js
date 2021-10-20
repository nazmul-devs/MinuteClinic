import React from "react";
import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import UseAuth from "../../Hooks/UseAuth";

const PrivateRoute = ({ children, ...rest }) => {
	const { user, loading } = UseAuth();
	if (loading) {
		return (
			<div className="text-center my-5">
				<Spinner animation="grow" />
			</div>
		);
	}
	return (
		<div>
			<Route
				{...rest}
				render={({ location }) =>
					user.displayName ? (
						children
					) : (
						<Redirect
							to={{
								pathname: "/login",
								state: { from: location },
							}}
						/>
					)
				}
			></Route>
		</div>
	);
};

export default PrivateRoute;
