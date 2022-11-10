import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { InfoById } from "../components/InfoById";
import { AllData } from "../components/AllData";
import { AllCourses } from "../components/AllCourses";

const AcedemicInfo = () => {
	const [token, setToken] = useState(localStorage.getItem("token"));
	const [itsAuth, setItsAuth] = useState(true);
	useEffect(() => {
		document.title = "Información Academica";
		console.log(token, "Este es el token que esta almacenado");
		if (token == null || token == undefined) {
			setItsAuth(false);
		}
	}, []);
	
	return (
		<>
			<InfoById />
			<AllCourses />
			<AllData />
			{!itsAuth && <Navigate to="/login" replace={false} />}
		</>
	);

};

export default AcedemicInfo;