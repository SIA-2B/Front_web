import React, { useState, useEffect } from "react";
import { useSelect } from "../context/SelectContext";
import {
	GET_COURSES_BY_ID,
	GET_COURSES_BY_PLAN,
	GET_GROUPS_BY_CURSO,
} from "../features/courses/courses.querys";
import { useLazyQuery, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import "../styles/courses.css";

export const Grupos = () => {
	const a = useSelect();
	console.log(a.idGrupo);

	const curso = useQuery(GET_COURSES_BY_ID, {
		variables: { id: a.idGrupo },
	});

	const grupos = useQuery(GET_GROUPS_BY_CURSO, {
		variables: { idCurso: a.idGrupo },
	});

	return (
		<div>
			<h1>Grupos {curso.data?.cursosById.nombre}</h1>
			<div className="tbl-header">
				<table cellPadding="0" cellSpacing="0" border="0">
					<thead>
						<tr>
							<th>ID</th>
							<th>Grupo</th>
							<th>Cupos Disponibles</th>
							<th>Profesor</th>
							<th>Horario</th>
							<th>Lugar</th>
						</tr>
					</thead>
				</table>
			</div>
			<div className="tbl-content">
				<table cellPadding="0" cellSpacing="0" border="0">
					<tbody>
						{grupos.data?.gruposByCurso.map((row, index) => (
							<tr key={index}>
								<td>{row.id}</td>
								<td>{row.numero}</td>
								<td>{row.cupos}</td>
								<td>{row.idprofesor}</td>
								<td>{row.horario}</td>
								<td>{row.lugar}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};
export default Grupos;
