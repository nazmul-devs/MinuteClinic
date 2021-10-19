import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./pages/Header/Header";
import Login from "./pages/Login/Login";
import Footer from "./pages/Footer/Footer";
import ServicesDetails from "./pages/Services/ServiceDetails/ServicesDetails";

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path="/">
					<Home></Home>
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/details/:serviceId">
					<ServicesDetails />
				</Route>
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
