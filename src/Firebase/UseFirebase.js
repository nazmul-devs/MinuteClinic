import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	onAuthStateChanged,
	signOut,
	GithubAuthProvider,
} from "firebase/auth";
import { useEffect, useState } from "react";
import InitialFirebase from "./InitialFirebase";

InitialFirebase();
const auth = getAuth();
const UseFirebase = () => {
	const [user, setUser] = useState({});
	// google login implement
	const googleSignIn = () => {
		const googleProvider = new GoogleAuthProvider();

		signInWithPopup(auth, googleProvider).then((result) => {
			const user = result.user;
		});
	};
	const githubSignIn = () => {
		const gitProvider = new GithubAuthProvider();
		signInWithPopup(auth, gitProvider).then((result) => {
			const user = result.user;
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
	return { googleSignIn, user, logout, githubSignIn };
};

export default UseFirebase;
