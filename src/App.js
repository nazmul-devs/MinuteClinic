import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./pages/Header/Header";
import Login from "./pages/Login/Login";
import Footer from "./pages/Footer/Footer";
import ServicesDetails from "./pages/Services/ServiceDetails/ServicesDetails";
import NotFound from "./pages/NotFound/NotFound";
import AuthProvider from "./Hooks/AuthProvider";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
import Pricing from "./pages/Pricing/Pricing";
import Team from "./pages/Team/Team";

function App() {
	return (
		<AuthProvider>
			<Router>
				<Header />
				<Switch>
					<Route exact path="/">
						<Home></Home>
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/pricing">
						<Pricing />
					</Route>
					<PrivateRoute path="/team">
						<Team />
					</PrivateRoute>
					<PrivateRoute path="/details/:serviceId">
						<ServicesDetails />
					</PrivateRoute>
					<Route path="*">
						<NotFound />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</AuthProvider>
	);
}

export default App;
