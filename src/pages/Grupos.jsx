import React, { useState, useEffect } from "react";
import { useSelect } from "../context/SelectContext";
import { GET_COURSES_BY_ID, GET_COURSES_BY_PLAN, GET_GROUPS_BY_CURSO } from "../features/courses/courses.querys";
import { useLazyQuery,useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

export const Grupos=() =>{

    const a = useSelect();
    console.log(a.idGrupo)

    const curso =  useQuery(GET_COURSES_BY_ID, {
        variables: { id: a.idGrupo}
    });
    
    const grupos  = useQuery(GET_GROUPS_BY_CURSO,{
        variables: { idCurso: a.idGrupo}
    });


    return (
        <div>
            <h1>Grupos</h1>

			
            {grupos.data?.gruposByCurso.map(c=>
                <div>

                <div class="title3">{c.id}</div>

                <div class="title3">{c.numero}</div>

                <div class="title3">{c.cupos}</div>

                <div class="title3">{c.idprofesor}</div>

                <div class="title3">{c.horario}</div>

                <div class="title3">{c.lugar}</div>

                <div class="title3">{c.idCurso}</div>


                </div>


            )}
        </div>
        
        
        
        

    );
    
};
export default Grupos;


