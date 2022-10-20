import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_PERSONA_BY_ID } from "../features/personal_info/personal_info.querys";
import "../styles/personal_info.css";

const PersonalInfo = () => {
	useEffect(() => {
		document.title = "Información Personal";
	}, []);

	const { loading, error, data } = useQuery(GET_PERSONA_BY_ID, {
		variables: { id: 6 },
	});

	if (loading) return <div>Cargando...</div>;
	if (error) return <div>Error... {error}</div>;

	return (
		<>
			<h2>Información Personal</h2>
			<div className="personal-info">
				<div className="info-card">
					<div className="info">{data.personaById.idPersona}</div>
					<div className="title">ID</div>
				</div>
				<div className="info-card">
					<div className="info">{data.personaById.nombrePersona}</div>
					<div className="title">Nombre</div>
				</div>
				<div className="info-card">
					<div className="info">{data.personaById.apellidoPersona}</div>
					<div className="title">Apellido</div>
				</div>
				<div className="info-card">
					<div className="info">{data.personaById.tipoDocumento}</div>
					<div className="title">Tipo Documento</div>
				</div>
				<div className="info-card">
					<div className="info">{data.personaById.NUIPPersona}</div>
					<div className="title">Numero de Documento</div>
				</div>
				<div className="info-card">
					<div className="info">{data.personaById.usernamePersona}</div>
					<div className="title">Usuario</div>
				</div>
				<div className="info-card">
					<div className="info">{data.personaById.lugarNacimiento}</div>
					<div className="title">Lugar de Nacimiento</div>
				</div>
				<div className="info-card">
					<div className="info">{data.personaById.lugarExpDocumento}</div>
					<div className="title">Lugar de expedición</div>
				</div>
				<div className="info-card">
					<div className="info">{data.personaById.estadoCivil}</div>
					<div className="title">Estado Civil</div>
				</div>
				<div className="info-card">
					<div className="info">{data.personaById.sexoBio}</div>
					<div className="title">Genero</div>
				</div>
				<div className="info-card">
					<div className="info">{data.personaById.etnia}</div>
					<div className="title">Etnia</div>
				</div>
				<div className="info-card">
					<div className="info">{data.personaById.correoPersonal}</div>
					<div className="title">Correo Personal</div>
				</div>
				<div className="info-card">
					<div className="info">{data.personaById.telefonoMovil}</div>
					<div className="title">Celular</div>
				</div>
				<div className="info-card">
					<div className="info">{data.personaById.telefonoFijo}</div>
					<div className="title">Teléfono</div>
				</div>
				<div className="info-card">
					<div className="info">{data.personaById.fechaNacimiento}</div>
					<div className="title">Fecha de Nacimiento</div>
				</div>
				<div className="info-card">
					<div className="info">{data.personaById.EPS}</div>
					<div className="title">EPS</div>
				</div>
				<div className="info-card">
					<div className="info">{data.personaById.grupoSangre}</div>
					<div className="title">Grupo Sanguineo</div>
				</div>
				<div className="info-card">
					<div className="info">{data.personaById.factorRH}</div>
					<div className="title">RH</div>
				</div>
				<div className="info-card">
					<div className="info">{data.personaById.nivelAcademico}</div>
					<div className="title">Nivel Académico</div>
				</div>
				<div className="info-card">
					<div className="info">{data.personaById.dirResidencia}</div>
					<div className="title">Dirección Residencia</div>
				</div>
				<div className="info-card">
					<div className="info">{data.personaById.lugarResidencia}</div>
					<div className="title">Lugar Recidencia</div>
				</div>
				<div className="info-card">
					<div className="info">{data.personaById.estratoSocioeconomico}</div>
					<div className="title">Estrato</div>
				</div>
				<div className="info-card">
					<div className="info">{data.personaById.libretaMilitar}</div>
					<div className="title">Libreta Militar</div>
				</div>
				<div className="info-card">
					<div className="info">{data.personaById.fechaRegistroSistema}</div>
					<div className="title">Fecha de Registro</div>
				</div>
				<div className="info-card">
					<div className="info">{data.personaById.estadoPersona}</div>
					<div className="title">Estado</div>
				</div>
			</div>
		</>
	);
};

export default PersonalInfo;
