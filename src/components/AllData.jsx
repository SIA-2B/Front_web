import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_DATA } from "../features/academic_info/academic_info.querys";

export const AllData = () => {
	const { loading, error, data } = useQuery(GET_ALL_DATA, {});

	console.log(data);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error {error}</div>;

	return (
		<>
			<h1>Toda la información</h1>
			<div className="tbl-header">
				<table cellPadding="0" cellSpacing="0" border="0">
					<thead>
						<tr>
							<th>Facultad</th>
							<th>Plan de estudios</th>
							<th>PA</th>
							<th>PAPA</th>
							<th>PAPI</th>
							<th>Activo</th>
						</tr>
					</thead>
				</table>
			</div>
			<div className="tbl-content">
				<table cellPadding="0" cellSpacing="0" border="0">
					<tbody>
						{data.allDatos.map((row, index) => (
							<tr key={index}>
								<td>{row.facultad}</td>
								<td>
									{row.study_plan_id} - {row.study_plan_name}
								</td>
								<td>{row.pa}</td>
								<td>{row.papa}</td>
								<td>{row.papi}</td>
								<td>{row.active ? "Si" : "No"}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};
