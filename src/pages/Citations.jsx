import React from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
import { GET_PENDING_CITATIONS } from "../features/citations/citations.querys";

const Citations = () => {
	const { loading, error, data } = useQuery(GET_PENDING_CITATIONS, {
		variables: { student_id: 10 },
	});

	console.log(data);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error {error}</div>;

	return (
		<>
			<div>
				Citaciones Pendientes:
				{data.getPendingCitations.pendingCitations.map((item) => (
					<div key={item.id}>{item.id} - {item.initial_time}:{item.final_time}</div>
				))}
			</div>
		</>
	);
};

export default Citations;
