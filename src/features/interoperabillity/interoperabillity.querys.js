import { gql } from "@apollo/client";

export const GET_COURSE_CALIFICATIONS = gql`
	query {
		allUNcademy {
			result {
				courseName
				teacherName
				currentDate
				gradesList {
					group_id
					student_name
					final_grade
					absences
					approved
				}
			}
		}
	}
`;
