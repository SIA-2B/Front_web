import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_COURSES } from "../features/academic_info/academic_info.querys";

export const AllCourses = () => {
	const { loading, error, data } = useQuery(GET_ALL_COURSES, {});

	console.log(data);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error {error}</div>;

	return (
		<>
			<h1>Todos los cursos</h1>
			<div className="tbl-header">
				<table cellPadding="0" cellSpacing="0" border="0">
					<thead>
						<tr>
							<th>ID</th>
							<th>Materia</th>
							<th>Creditos</th>
							<th>Nota</th>
							<th>Periodo</th>
							<th>Plan</th>
						</tr>
					</thead>
				</table>
			</div>
			<div className="tbl-content">
				<table cellPadding="0" cellSpacing="0" border="0">
					<tbody>
						{data.allCourses.map((row, index) => (
							<tr key={index}>
								<td>{row.codigo_id}</td>
								<td>{row.name}</td>
								<td>{row.credit}</td>
								<td>{row.nota}</td>
								<td>{row.periodo}</td>
								<td>{row.plan}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};
