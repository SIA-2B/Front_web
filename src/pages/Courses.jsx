import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_COURSES, GET_COURSES_BY_ID } from "../features/courses/courses.querys";

const Courses = () => {
	const { loading, error, data } = useQuery(GET_COURSES_BY_ID, {
		variables: { id: "0005" },
	});

	// const [example, setExample] = useState(null);

	// useEffect(() => {
	// 	document.title = `${example}`;
	//   }, [example]);

	console.log(data);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error {error}</div>;

	return (
		<>
			<div>
				<input onChange={(e) => setExample(e.target.value)}></input>
				<div className="title">Cursos</div>
				{data.getCursosById.map((item) => (
					<div key={item.id} className='courses-row'>
						<span>{item.id}</span>
					</div>
				))}
			</div>
		</>
	);
};

export default Courses;