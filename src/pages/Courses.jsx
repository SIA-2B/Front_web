import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_COURSES, GET_COURSES_BY_ID } from "../features/courses/courses.querys";

const Courses = () => {
	const result = useQuery(GET_COURSES);

	console.log(result);

	// if (loading) return <div>Loading...</div>;
	// if (error) return <div>Error {error}</div>;

	return (
		<>
			<div>
				<div className="title">Cursos</div>
				<h1>Hola</h1>
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