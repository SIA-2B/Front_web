import { gql } from "@apollo/client";

export const GET_ACADEMIC_INFO_BY_ID = gql`
query getDatosById($student_id: String!, $study_plan_name: String!){
    datosById(datos: {
      student_id: $student_id,
      study_plan_name: $study_plan_name
    }){
      _id
      student_id
      credits_id
      papa
      pa
      papi
      study_plan_id
      study_plan_name
      facultad
      active
    }
  }
`;