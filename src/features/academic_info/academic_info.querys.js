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

export const GET_ALL_DATA = gql`
query get_all_data{
  allDatos {
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

export const GET_ALL_COURSES = gql`
query get_all_courses{
  allCourses {
    _id
    datos_id
    codigo_id
    name
    credit
    periodo
    nota
    plan
  }
}
`;