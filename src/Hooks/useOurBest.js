import { useEffect } from "react";
import { useState } from "react";

const useOurBest = () => {
	const [bestServices, setBestServices] = useState([]);
	useEffect(() => {
		fetch("./OurBest.json")
			.then((res) => res.json())
			.then((data) => setBestServices(data));
	}, []);
	return bestServices;
};

export default useOurBest;
