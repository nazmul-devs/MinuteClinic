import React from "react";
import { Redirect, Route } from "react-router";
import UseAuth from "../../Hooks/UseAuth";

const PrivateRoute = ({ children, ...rest }) => {
	const { user } = UseAuth();
	console.log(user.displayName);
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
