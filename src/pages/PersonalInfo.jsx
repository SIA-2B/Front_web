import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import {
	GET_PERSONA_BY_ID,
	GET_PERSONA_BY_USERNAME,
} from "../features/personal_info/personal_info.querys";
import "../styles/personal_info.css";

const PersonalInfo = () => {
	const [username, setUsername] = useState(localStorage.getItem("username"));
	const [token, setToken] = useState(localStorage.getItem("token"));
	const [itsAuth, setItsAuth] = useState(true);
	useEffect(() => {
		document.title = "Información Personal";
		console.log(token, "Este es el token que esta almacenado");
		if (token == null || token == undefined) {
			setItsAuth(false);
		}
	}, []);

	const { loading, error, data } = useQuery(GET_PERSONA_BY_USERNAME, {
		variables: { username: username },
	});

	console.log(data);

	if (loading) return <div>Cargando...</div>;
	if (error) return <div>Error... {error}</div>;

	return (
		<>
			{/* {!itsAuth && <Navigate to="/login" replace={false} />} */}
			<h1>Información Personal</h1>
			<div className="personal-info">
				<div className="info-card">
					<div className="info">{data.personaByUsername.idPersona}</div>
					<div className="title">ID</div>
				</div>
				<div className="info-card">
					<div className="info">{data.personaByUsername.nombrePersona}</div>
					<div className="title">Nombre</div>
				</div>
				<div className="info-card">
					<div className="info">{data.personaByUsername.apellidoPersona}</div>
					<div className="title">Apellido</div>
				</div>
				<div className="info-card">
					<div className="info">{data.personaByUsername.tipoDocumento}</div>
					<div className="title">Tipo Documento</div>
				</div>
				<div className="info-card">
					<div className="info">{data.personaByUsername.NUIPPersona}</div>
					<div className="title">Numero de Documento</div>
				</div>
				<div className="info-card">
					<div className="info">{data.personaByUsername.usernamePersona}</div>
					<div className="title">Usuario</div>
				</div>
				<div className="info-card">
					<div className="info">{data.personaByUsername.lugarNacimiento}</div>
					<div className="title">Lugar de Nacimiento</div>
				</div>
				<div className="info-card">
					<div className="info">{data.personaByUsername.lugarExpDocumento}</div>
					<div className="title">Lugar de expedición</div>
				</div>
				<div className="info-card">
					<div className="info">{data.personaByUsername.estadoCivil}</div>
					<div className="title">Estado Civil</div>
				</div>
				<div className="info-card">
					<div className="info">{data.personaByUsername.sexoBio}</div>
					<div className="title">Genero</div>
				</div>
				<div className="info-card">
					<div className="info">{data.personaByUsername.etnia}</div>
					<div className="title">Etnia</div>
				</div>
				<div className="info-card">
					<div className="info">{data.personaByUsername.correoPersonal}</div>
					<div className="title">Correo Personal</div>
				</div>
				<div className="info-card">
					<div className="info">{data.personaByUsername.telefonoMovil}</div>
					<div className="title">Celular</div>
				</div>
				<div className="info-card">
					<div className="info">{data.personaByUsername.telefonoFijo}</div>
					<div className="title">Teléfono</div>
				</div>
				<div className="info-card">
					<div className="info">{data.personaByUsername.fechaNacimiento}</div>
					<div className="title">Fecha de Nacimiento</div>
				</div>
				<div className="info-card">
					<div className="info">{data.personaByUsername.EPS}</div>
					<div className="title">EPS</div>
				</div>
				<div className="info-card">
					<div className="info">{data.personaByUsername.grupoSangre}</div>
					<div className="title">Grupo Sanguineo</div>
				</div>
				<div className="info-card">
					<div className="info">{data.personaByUsername.factorRH}</div>
					<div className="title">RH</div>
				</div>
				<div className="info-card">
					<div className="info">{data.personaByUsername.nivelAcademico}</div>
					<div className="title">Nivel Académico</div>
				</div>
				<div className="info-card">
					<div className="info">{data.personaByUsername.dirResidencia}</div>
					<div className="title">Dirección Residencia</div>
				</div>
				<div className="info-card">
					<div className="info">{data.personaByUsername.lugarResidencia}</div>
					<div className="title">Lugar Recidencia</div>
				</div>
				<div className="info-card">
					<div className="info">
						{data.personaByUsername.estratoSocioeconomico}
					</div>
					<div className="title">Estrato</div>
				</div>
				<div className="info-card">
					<div className="info">{data.personaByUsername.libretaMilitar}</div>
					<div className="title">Libreta Militar</div>
				</div>
				<div className="info-card">
					<div className="info">
						{data.personaByUsername.fechaRegistroSistema}
					</div>
					<div className="title">Fecha de Registro</div>
				</div>
				<div className="info-card">
					<div className="info">{data.personaByUsername.estadoPersona}</div>
					<div className="title">Estado</div>
				</div>
			</div>
		</>
	);
};

export default PersonalInfo;
