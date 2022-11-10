import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import "../styles/citations.css";
import { PendingCitations } from "../components/PendingCitations";
import { HistoricCitations } from "../components/HistoricCitations";

const Citations = () => {
	const [token, setToken] = useState(localStorage.getItem("token"));
	const [itsAuth, setItsAuth] = useState(true);
	useEffect(() => {
		document.title = "Citaciones";
		console.log(token, "Este es el token que esta almacenado");
		if (token == null || token == undefined) {
			setItsAuth(false);
		}
	}, []);

	return (
		<>
			<PendingCitations />
			<HistoricCitations />
			{!itsAuth && <Navigate to="/login" replace={false} />}
		</>
	);
};

export default Citations;
