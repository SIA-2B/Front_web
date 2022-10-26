import React, { useState, useEffect, useContext } from "react";
import { useLazyQuery,useQuery } from "@apollo/client";
import {
	GET_COURSES,
	GET_COURSES_BY_ID,
} from "../features/courses/courses.querys";
import { CoursesA } from "../components/CoursesA";
import { Opciones} from "../components/Selects";
import { SelectProvider,useSelect } from "../context/SelectContext";







const Courses = () => {

	const {selectId} = useSelect();
	const [getCourse, { data, loading, error }] = useLazyQuery(GET_COURSES_BY_ID);



	const cur = useQuery(GET_COURSES);
	const [getAllCourse,result] = useLazyQuery(GET_COURSES);

	const [courseId, setCourseId] = useState("");

	console.log(getAllCourse)
	

	return (

		<div>

			<h2>Buscador de Cursos</h2>
			<h5>Por Id:</h5>
			
			{ cur.data &&
				<Opciones opc = {cur.data?.allCursos} />
			}

			<input
				value={courseId}
				onChange={(e) => setCourseId(e.target.value)}
			></input>
			<button
				onClick={(e) => {
					e.preventDefault();
					getCourse({ variables: { id: courseId } });
				}}
				
			>
				Buscar
			</button>

			<button
				onClick={(e) => {
					e.preventDefault();
					getAllCourse();
					
				}}
			>
				Todos los Cursos
			</button>


			<div>
				{ result.data &&
					<CoursesA cursos ={result.data?.allCursos}/>
				}
				
			</div>
			




			{data && (
				<div>
					<h1></h1>
					<h5>Curso Encontrado: </h5>
					<div className="course-card">
						<div className="info">
							<div className="data">{data.cursosById.id}</div>
							<div className="sub-title">ID</div>
						</div>
						<div className="info">
							<div className="data">{data.cursosById.nombre}</div>
							<div className="sub-title">Nombre Asignatura</div>
						</div>
						<div className="info">
							<div className="data">{data.cursosById.creditos}</div>
							<div className="sub-title">Creditos</div>
						</div>
						<div className="info">
							<div className="data">{data.cursosById.tipologia}</div>
							<div className="sub-title">Tipologia</div>
						</div>
						<div className="info">
							<div className="data">{data.cursosById.sede}</div>
							<div className="sub-title">Sede</div>
						</div>
						<div className="info">
							<div className="data">{data.cursosById.nivel_estudio}</div>
							<div className="sub-title">Nivel Estudio</div>
						</div>
						<div className="info">
							<div className="data">{data.cursosById.facultad}</div>
							<div className="sub-title">Facultad</div>
						</div>
						<div className="info">
							<div className="data">{data.cursosById.descripcion}</div>
							<div className="sub-title">Descripcion</div>
						</div>
						<div className="info">
							<div className="data">{data.cursosById.codigo}</div>
							<div className="sub-title">Código</div>
						</div>
					</div>
				</div>
			)}
		</div>

	);
};
export default Courses;



