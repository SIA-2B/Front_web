import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_GRADES } from "../features/grades/grades.querys";
import "../styles/all_grades.css";

export const AllGrades = () => {
	const { loading, error, data } = useQuery(GET_ALL_GRADES, {});

	console.log(data);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error {error}</div>;

	return (
		<>
			<h1>Todas las calificaciones</h1>
			<div className="tbl-header">
				<table cellPadding="0" cellSpacing="0" border="0">
					<thead>
						<tr>
							<th>ID</th>
							<th>Curso</th>
							<th>Estudiante</th>
							<th>Calificacion</th>
							<th>Periodo</th>
						</tr>
					</thead>
				</table>
			</div>
			<div className="tbl-content">
				<table cellPadding="0" cellSpacing="0" border="0">
					<tbody>
						{data.allGrades.map((row, index) => (
							<tr key={index}>
								<td>{row.courseId}</td>
								<td>{row.courseName}</td>
								<td>{row.studentId}</td>
								<td>{row.gradeFinal}</td>
								<td>{row.gradePeriod}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};
