import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_DATA } from "../features/academic_info/academic_info.querys";


export const AllData = () => {

    const { loading, error, data } = useQuery(GET_ALL_DATA, {
    });
    
    console.log(data);
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error {error}</div>;
    
    return (
        <>
            <div>
                <div className="title">Toda la información</div>
                {data.allDatos.map( row =>
                Object.keys(row).map(key =>
                    <div>
                        {key}={row[key]}
                    
                    </div>
                    ))}
            </div>
        </>
    );
    
};