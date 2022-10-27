import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_GRADES_BY_ID } from "../features/grades/grades.querys";


export const GradesById = () => {

    const { loading, error, data } = useQuery(GET_GRADES_BY_ID, {
        variables: { var_id: 2},
    });
    
    console.log(loading, error, data);
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error {error}</div>;
    
    return (
        <>
            <div>
                <div className="title">Informacion academica</div>
                {Object.keys(data.gradeById).map((key) =>
                <div>
                    {key}:{data.gradeById[key]}
                </div>
                    )}
            </div>
        </>
    );
    
};