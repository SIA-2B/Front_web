import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_PENDING_CITATIONS } from "../features/citations/citations.querys";

const Citations = () => {
	const { loading, error, data } = useQuery(GET_PENDING_CITATIONS, {
		variables: { student_id: 10 },
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
				<div className="title">Citaciones Pendientes</div>
				{data.getPendingCitations.pendingCitations.map((item) => (
					<div key={item.id} className='citation-row'>
						<span>{item.id}</span>
					</div>
				))}
			</div>
		</>
	);
};

export default Citations;
