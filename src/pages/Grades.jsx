import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { AllGrades } from "../components/AllGrades";
import { GradesById } from "../components/GradesById";

const Grades = () => {
	useEffect(() => {
		document.title = "Calificaciones";
	}, []);
	
	return (
		<>
			<GradesById />
			<AllGrades />
		</>
	);

};

export default Grades;