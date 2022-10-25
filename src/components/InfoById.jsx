import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_ACADEMIC_INFO_BY_ID } from "../features/academic_info/academic_info.querys";


export const InfoById = () => {

    const { loading, error, data } = useQuery(GET_ACADEMIC_INFO_BY_ID, {
        variables: { student_id: 6,study_plan_name:"sistemas y computacion" },
    });
    
    // const [example, setExample] = useState(null);
    
    // useEffect(() => {
    // 	document.title = `${example}`;
    //   }, [example]);
    
    console.log(data);
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error {error}</div>;
    
    return (
        <>
            <div>
                <div className="title">Informacion academica</div>
                {Object.keys(data.datosById).map((key) =>
                <div>
                    {key}:{data.datosById[key]}
                </div>
                    )}
            </div>
        </>
    );
    
};

