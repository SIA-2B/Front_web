import React, { useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import {
	GET_COURSES,
	GET_COURSES_BY_ID,
} from "../features/courses/courses.querys";

const Courses = () => {
	const [getCourse, { data, loading, error }] = useLazyQuery(GET_COURSES_BY_ID);

	const [courseId, setCourseId] = useState("");

	return (
		<>
			<div>
				<h2>Buscador de Cursos</h2>
				<h3>Por Id:</h3>
				<input
					value={courseId}
					onChange={(e) => setCourseId(e.target.value)}
				></input>
				<button onChange={getCourse({ variables: { id: courseId } })}>
					Buscar
				</button>
				{/* {data.getCursosById.map((item) => (
					<div key={item.id} className='courses-row'>
						<span>{item.id}</span>
					</div>
				))} */}
			</div>
		</>
	);
};

export default Courses;
