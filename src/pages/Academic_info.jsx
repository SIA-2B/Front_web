import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { InfoById } from "../components/InfoById";
import { AllData } from "../components/AllData";
import { AllCourses } from "../components/AllCourses";

const AcedemicInfo = () => {
	useEffect(() => {
		document.title = "Información Academica";
	}, []);
	
	return (
		<>
			<InfoById />
			<AllCourses />
			<AllData />
		</>
	);

};

export default AcedemicInfo;