import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { AllGrades } from "../components/AllGrades";
import { GradesById } from "../components/GradesById";

const Grades = () => {
	const [token, setToken] = useState(localStorage.getItem("token"));
	const [itsAuth, setItsAuth] = useState(true);
	useEffect(() => {
		document.title = "Calificaciones";
		console.log(token, "Este es el token que esta almacenado");
		if (token == null || token == undefined) {
			setItsAuth(false);
		}
	}, []);

	return (
		<>
			<GradesById />
			<AllGrades />
			{!itsAuth && <Navigate to="/login" replace={false} />}
		</>
	);
};

export default Grades;
