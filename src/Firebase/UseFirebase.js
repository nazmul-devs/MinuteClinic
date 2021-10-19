import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import InitialFirebase from "./InitialFirebase";

InitialFirebase();
const auth = getAuth();
const UseFirebase = () => {
	const googleSignIn = () => {
		const googleProvider = new GoogleAuthProvider();

		signInWithPopup(auth, googleProvider).then((result) => {
			const user = result.user;
			console.log(user);
		});
	};
	return { googleSignIn };
};

export default UseFirebase;
