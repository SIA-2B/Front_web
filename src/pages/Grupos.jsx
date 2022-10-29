import React, { useState, useEffect } from "react";
import { useSelect } from "../context/SelectContext";
import { GET_COURSES_BY_ID, GET_COURSES_BY_PLAN, GET_GROUPS_BY_CURSO } from "../features/courses/courses.querys";
import { useLazyQuery,useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import "../styles/courses.css";

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
        <div >
            <h1>Grupos {curso.data?.cursosById.nombre}</h1>
            <br/>
            <h3 class="title3" >Información Académica</h3>
            <div class="title3">
            {curso.data?.cursosById.descripcion}
            </div>
            <br/>
			
            {grupos.data?.gruposByCurso.map(c=>
                <div class="title3">
                <br/>

                <h3>Informacion Grupo</h3>             

                <div>ID: &nbsp; {c.id}</div>

                <div>Grupo#:&nbsp;{c.numero}</div>

                <div>Cupos Disponibles:&nbsp;{c.cupos}</div>

                <div>Profesor:&nbsp;{c.idprofesor}</div>

                <div>Horario: &nbsp;{c.horario}</div>

                <div>Lugar:&nbsp;{c.lugar}</div>


                </div>


            )}
        </div>
        
        
        
        

    );
    
};
export default Grupos;


