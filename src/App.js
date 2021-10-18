import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./pages/Header/Header";
import Login from "./pages/Login/Login";

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Switch>
					<Route exact path="/">
						<Home></Home>
					</Route>
					<Route path="/login">
						<Login />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
