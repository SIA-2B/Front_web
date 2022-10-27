import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_COURSES } from "../features/academic_info/academic_info.querys";


export const AllCourses = () => {

    const { loading, error, data } = useQuery(GET_ALL_COURSES, {
    });
    
    console.log(data);
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error {error}</div>;
    
    return (
        <>
            <div>
                <div className="title">Todos los cursos</div>
                {data.allCourses.map( row =>
                Object.keys(row).map(key =>
                    <div>
                        {key}={row[key]}
                    
                    </div>
                    ))}
            </div>
        </>
    );
    
};