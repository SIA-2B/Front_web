import { gql } from "@apollo/client";

export const GET_PERSONA_BY_ID = gql`
	query getPersonaById($id: Int!) {
		personaById(id: $id) {
			idPersona
			nombrePersona
			apellidoPersona
			tipoDocumento
			NUIPPersona
			usernamePersona
			lugarNacimiento
			lugarExpDocumento
			estadoCivil
			sexoBio
			etnia
			correoPersonal
			telefonoMovil
			telefonoFijo
			fechaNacimiento
			EPS
			grupoSangre
			nivelAcademico
			factorRH
			dirResidencia
			lugarResidencia
			estratoSocioeconomico
			libretaMilitar
			fechaRegistroSistema
			estadoPersona
		}
	}
`;
