import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PERSONA_BY_ID } from "../features/personal_info/personal_info.querys";

const PersonalInfo = () => {
	const { loading, error, data } = useQuery(GET_PERSONA_BY_ID, {
		variables: { id: 6 },
	});

	if (loading) return <div>Cargando...</div>;
	if (error) return <div>Error... {error}</div>;

	return (
		<>
			<div className="personal-info">
				<div className="info-card">
					<div className="info">{data.personaById.idPersona}</div>
					<div className="title">ID</div>
				</div>
                <div className="info-card">
                    <div className="info"></div>
                    <div className="title"></div>
                </div>
                <div className="info-card">
                    <div className="info"></div>
                </div>
                <div className="info-card">
                    <div className="info"></div>
                </div>
                <div className="info-card">
                    <div className="info"></div>
                </div>
                <div className="info-card">
                    <div className="info"></div>
                </div>
			</div>
		</>
	);
};

export default PersonalInfo;
