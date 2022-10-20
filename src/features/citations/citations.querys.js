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

export const GET_PENDING_CITATIONS_BY_CURRICULUM = gql`
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
