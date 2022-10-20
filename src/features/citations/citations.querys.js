import { gql } from "@apollo/client";

export const GET_PENDING_CITATIONS = gql`
query getPendingCitations($student_id: Int!) {
  getPendingCitations(student_id: $student_id){
    pendingCitations {
      id
      student_id
      curriculum_id
      date
      initial_time
      final_time
      pending
    }
  }
}
`;

export const GET_HISTORIC_CITATIONS = gql`
query getHistoricCitations($student_id: Int!) {
  getHistoricCitations(student_id: $student_id) {
    historicCitations{
      id
      student_id
      curriculum_id
      date
      initial_time
      final_time
      pending
    }
  }
}
`;
