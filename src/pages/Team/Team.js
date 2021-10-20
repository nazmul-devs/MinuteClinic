import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Doctor from "./Doctor/Doctor";

const Team = () => {
	const [doctors, setDoctors] = useState([]);
	useEffect(() => {
		fetch("/doctors.json")
			.then((res) => res.json())
			.then((data) => setDoctors(data));
	}, []);

	return (
		<div className="container-fluid pb-5" style={{ background: "#E5F7FD" }}>
			<Container>
				<h2
					className="text-center py-5 fw-bold"
					style={{ color: "#0076EF", fontSize: "50px" }}
				>
					Our Team
				</h2>

				<Row sm={1} md={2} lg={3} className="g-5">
					{doctors.map((doctor) => (
						<Doctor key={doctor.id} doctor={doctor} />
					))}
				</Row>
			</Container>
		</div>
	);
};

export default Team;
