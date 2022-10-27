import { gql } from "@apollo/client";


export const GET_GROUPS_BY_CURSO = gql`
query getCursosById($idCurso: String!){
		cursosById(idCurso: $idCurso){
			id
			numero
			id_profesor
			cupos
			horario
			lugar
			idCurso	
	}
}
`;




export const GET_GROUPS = gql`
	query getAllgrupos {
		allGrupos{
			id
			numero
			id_profesor
			cupos
			horario
			lugar
			idCurso		  
			
		}		
	}
`;





export const GET_PLANES = gql`
	query getAllPlanes {
		allPlanes{
			codigo
			nivelestudios
			nombre
			
		}		
	}
`;

export const GET_COURSES_BY_PLAN = gql`
	query getCursosByPlan($idPlan: String!){
		cursosByPlan(idPlan: $idPlan){
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
