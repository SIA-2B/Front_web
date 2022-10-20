import React, { useState, useEffect } from "react";
import "../styles/citations.css";
import { PendingCitations } from "../components/PendingCitations";
import { HistoricCitations } from "../components/HistoricCitations";

const Citations = () => {
	useEffect(() => {
		document.title = "Citaciones";
	}, []);
	
	return (
		<>
			<PendingCitations />
			<HistoricCitations />
		</>
	);
};

export default Citations;
