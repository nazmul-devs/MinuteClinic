import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	onAuthStateChanged,
	signOut,
	GithubAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import InitialFirebase from "./InitialFirebase";

InitialFirebase();
const auth = getAuth();
const UseFirebase = () => {
	const [user, setUser] = useState({});
	const [newUser, setNewUser] = useState("");
	const [error, setError] = useState("");

	// user input
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	const [isNew, setIsNew] = useState(false);
	// google login implement
	const googleSignIn = () => {
		const googleProvider = new GoogleAuthProvider();

		signInWithPopup(auth, googleProvider).then((result) => {
			const user = result.user;
		});
	};
	// github login implement
	const githubSignIn = () => {
		const gitProvider = new GithubAuthProvider();
		signInWithPopup(auth, gitProvider).then((result) => {
			const user = result.user;
		});
	};
	// create user account
	const createUser = (e) => {
		e.preventDefault();
		isNew
			? createUserWithEmailAndPassword(auth, email, pass)
					.then((result) => {
						const newUser = result.user;
						setNewUser(newUser);
						setError("");
					})
					.catch((error) => {
						setError(error.message);
					})
			: signInWithEmailAndPassword(auth, email, pass)
					.then((result) => {
						const user = result.user;
						setNewUser(user);
						setError("");
					})
					.catch((error) => {
						setError(error.message);
					});
	};
	// logout implement
	const logout = () => {
		signOut(auth).then(() => {
			setUser({});
		});
	};

	// set user
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser({});
			}
		});
	}, []);

	// input handle
	const handleName = (e) => {
		setName(e.target.value);
	};

	const handleEmail = (e) => {
		setEmail(e.target.value);
	};
	const hanldePass = (e) => {
		setPass(e.target.value);
	};
	const handleCheck = (e) => {
		setIsNew(e.target.checked);
	};

	return {
		googleSignIn,
		user,
		logout,
		githubSignIn,
		handleName,
		handleEmail,
		hanldePass,
		handleCheck,
		isNew,
		createUser,
		newUser,
		error,
	};
};

export default UseFirebase;
