import React, { useState, useEffect } from "react";
import { useSelect } from "../context/SelectContext";
import { GET_COURSES_BY_PLAN } from "../features/courses/courses.querys";
import { useLazyQuery, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

export const CoursesA = ({ cursos }) => {
	if (cursos == null) return null;

	const a = useSelect();

	const caca = a.cur.data?.allPlanes.filter(
		(sup) => sup.nombre == a.selectCarrera
	);

	var arr = [];

	if (a.selectCarrera == "Any") {
		cursos.forEach(function (e) {
			if (
				(e.id == a.selectId || a.selectId == "Any") &&
				(e.nombre == a.selectNombre || a.selectNombre == "Any") &&
				(e.creditos == a.selectCreditos || a.selectCreditos == "Any") &&
				(e.tipologia == a.selectTipologia || a.selectTipologia == "Any") &&
				(e.sede == a.selectSede || a.selectSede == "Any") &&
				(e.nivelestudio == a.selectNivelestudio ||
					a.selectNivelestudio == "Any") &&
				(e.facultad == a.selectFacultad || a.selectFacultad == "Any")
			) {
				arr.push(e);
			}
		});
	} else {
		const cursosByPlan = useQuery(GET_COURSES_BY_PLAN, {
			variables: { idPlan: caca[0].codigo },
		});
		var cursosPorPlan = cursosByPlan.data?.cursosByPlan;
		console.log(cursosByPlan.data?.cursosByPlan, "Putos");

		if (cursosPorPlan == undefined) {
			return <div>No Hay Coincidencias</div>;
		}

		cursosPorPlan.forEach(function (e) {
			if (
				(e.id == a.selectId || a.selectId == "Any") &&
				(e.nombre == a.selectNombre || a.selectNombre == "Any") &&
				(e.creditos == a.selectCreditos || a.selectCreditos == "Any") &&
				(e.tipologia == a.selectTipologia || a.selectTipologia == "Any") &&
				(e.sede == a.selectSede || a.selectSede == "Any") &&
				(e.nivelestudio == a.selectNivelestudio ||
					a.selectNivelestudio == "Any") &&
				(e.facultad == a.selectFacultad || a.selectFacultad == "Any")
			) {
				arr.push(e);
			}
		});
	}

	return (
		<div>
			<h1>Resultados de la Busqueda</h1>
			<div className="tbl-header">
				<table cellPadding="0" cellSpacing="0" border="0">
					<thead>
						<tr>
							<th>ID</th>
							<th>Nombre</th>
							<th>Creditos</th>
							<th>Tipologia</th>
							<th>Sede</th>
							<th>NivelEstudio</th>
							<th>Facultad</th>
						</tr>
					</thead>
				</table>
			</div>
			<div className="tbl-content">
				<table cellPadding="0" cellSpacing="0" border="0">
					<tbody>
						{arr.map((row, index) => (
							<tr key={index}>
								<td>{row.id.substring(1, 10)}</td>
								<td>{row.nombre}</td>
								<td>{row.creditos}</td>
								<td>{row.tipologia}</td>
								<td>{row.sede}</td>
								<td>{row.nivelestudio}</td>
								<td>{row.facultad}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};
