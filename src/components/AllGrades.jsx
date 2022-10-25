import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_GRADES } from "../features/grades/grades.querys";


export const AllGrades = () => {

    const { loading, error, data } = useQuery(GET_ALL_GRADES, {
    });
    
    console.log(data);
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error {error}</div>;
    
    return (
        <>
            <div>
                <div className="title">Todas las calificaciones</div>
                {data.allGrades.map( row =>
                Object.keys(row).map(key =>
                    <div>
                        {key}={row[key]}
                    
                    </div>
                    ))}
            </div>
        </>
    );
    
};