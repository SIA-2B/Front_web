import { gql } from "@apollo/client";

export const GET_COURSES = gql`
	query getAllCuursos {
		allCursos {
			id
			nombre
			creditos
			tipologia
			sede
			nivel_estudio
			facultad
			descripcion
			codigo
		}
	}
`;

export const GET_COURSES_BY_ID = gql`
	query getCursosById($id: String!) {
		cursosById(datos: { id: $id }) {
			id
			nombre
			creditos
			tipologia
			sede
			nivel_estudio
			facultad
			descripcion
			codigo
		}
	}
`;
