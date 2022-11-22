import { gql } from "@apollo/client";

export const GET_ALL_GRADES = gql`
	query {
		allGrades {
			studentId
			courseId
			courseName
			gradeFinal
			gradePeriod
		}
	}
`;

export const GET_GRADES_BY_ID = gql`
	query {
		gradeById(id: 3) {
			courseId
			courseName
		}
	}
`;

export const GET_GRADES_BY_STUDENT = gql`
	query {
		allGradesByStudent(id: 10) {
			studentId
			courseId
			courseName
			gradeFinal
			gradePeriod
		}
	}
`;
