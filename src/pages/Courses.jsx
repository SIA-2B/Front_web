import React, { useState, useEffect, useContext } from "react";
import { useLazyQuery, useQuery } from "@apollo/client";
import {
	GET_COURSES,
	GET_COURSES_BY_ID,
} from "../features/courses/courses.querys";
import { CoursesA } from "../components/CoursesA";
import { Opciones } from "../components/Selects";
import { SelectProvider, useSelect } from "../context/SelectContext";
import "../styles/courses.css";

import "../styles/courses.css";

const Courses = () => {
	const { selectId } = useSelect();
	const [getCourse, { data, loading, error }] = useLazyQuery(GET_COURSES_BY_ID);

	const cur = useQuery(GET_COURSES);
	const [getAllCourse, result] = useLazyQuery(GET_COURSES);

	// console.log(getAllCourse);
	return (
		<div>
			<h1>
				Buscador de Cursos <br /> <br />{" "}
			</h1>

			{cur.data && <Opciones opc={cur.data?.allCursos} />}

			<div>
				<br />
			</div>
			<button
			className="button-search"
				onClick={(e) => {
					e.preventDefault();
					getAllCourse();
				}}
			>
				<h4>Buscar</h4>
			</button>

			<div>{result.data && <CoursesA cursos={result.data?.allCursos} />}</div>
		</div>
	);
};
export default Courses;
