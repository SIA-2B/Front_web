import React, { useEffect } from "react";
import { GET_PENDING_CITATIONS } from "../features/citations/citations.querys";
import { useQuery } from "@apollo/client";

export const PendingCitations = () => {
	const { loading, error, data } = useQuery(GET_PENDING_CITATIONS, {
		variables: { student_id: 10 },
	});

	console.log(data);

	

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error {error}</div>;
	return (
		<div className="">
			<div className="title">Citaciones Pendientes</div>
			{data.getPendingCitations.pendingCitations.map((item) => (
				<div key={item.id} className="citation-row">
					<div className="item">
						<span className="data">
							{new Date(item.date).toLocaleDateString("en-US")}
						</span>
						<span className="info">Fecha</span>
					</div>
					<div className="item">
						<span className="data">
							Desde: {item.initial_time} Hasta: {item.final_time}
						</span>
						<span className="info">Hora</span>
					</div>
				</div>
			))}
		</div>
	);
};
