import React, { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_GRADES_BY_ID } from "../features/grades/grades.querys";

export const GradesById = () => {
	const [getInfo, { loading, error, data }] = useLazyQuery(GET_GRADES_BY_ID);

	const [gradeId, setGradeId] = useState("");

	console.log(loading, error, data);

	//data.gradeById

	return (
		<>
			<h1>Informacion académica</h1>
			<div className="header-grade">
				<input
					value={gradeId}
					onChange={(e) => setGradeId(e.target.value)}
				></input>
				<button
					onClick={(e) => {
						e.preventDefault();
						getInfo({ variables: { var_id: gradeId } });
					}}
				>
					Buscar
				</button>
			</div>
			<div className="content-grade">
				{data && (
					<div className="result-grade">
						<span>
							{data.gradeById.courseId} - {data.gradeById.courseName}
						</span>
                        <span>Resultado de la busqueda</span>
					</div>
				)}
			</div>
		</>
	);
};
