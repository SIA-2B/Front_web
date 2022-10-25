import { gql } from "@apollo/client";

export const GET_COURSES = gql`
	query getAllCuursos {
		allCursos {
			id
			nombre
			creditos
			tipologia
			sede
			nivelestudio
			facultad
			descripcion
			prerequisitos
			codigo
		}
	}
`;

export const GET_COURSES_BY_ID = gql`
query getCursosById($id: String!){
	cursosById(id: $id){
	  id
	  nombre
	  creditos
	  tipologia
	  sede
	  nivelestudio
	  facultad
	  descripcion
	  prerequisitos
	  codigo
	}
	}
`;
