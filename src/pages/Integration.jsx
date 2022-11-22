import { useQuery } from "@apollo/client";
import React from "react";
import { GET_COURSE_CALIFICATIONS } from "../features/interoperabillity/interoperabillity.querys";
import "../styles/integration.css";

const Integration = () => {
	const { data, error, loading } = useQuery(GET_COURSE_CALIFICATIONS);
	console.log(data);
	if (loading) return <div>Cargando...</div>;
	if (error) return <div>Error...</div>;
	return (
		<>
			<div className="course-info">{data.allUNcademy.result.courseName}</div>
			<div className="course-info">{data.allUNcademy.result.teacherName}</div>
			<div className="course-info">{data.allUNcademy.result.currentDate}</div>
			{data.allUNcademy.result.gradesList.map((student) => (
				<div className="course-list-item">
					<div>
						<span>Nombre: </span>
						{student.student_name}
					</div>
					<div>
						<span>Grupo: </span>
						{student.group_id}
					</div>
					<div>
						<span>Nota Definitiva:</span>
						{student.final_grade}
					</div>
					<div>
						<span>Faltas: </span>
						{student.absences}
					</div>
					<div>
						<span>Estado: </span>
						{student.approved ? "Aprobado" : "Reprobado"}
					</div>
				</div>
			))}
		</>
	);
};

export default Integration;
