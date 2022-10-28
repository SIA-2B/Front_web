import React, { useState, useEffect } from "react";
import { useSelect } from "../context/SelectContext";
import { GET_COURSES_BY_PLAN } from "../features/courses/courses.querys";
import { useLazyQuery,useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

export const CoursesA=({cursos}) =>{
	if (cursos==null) return null

	const a = useSelect();

	const caca =a.cur.data?.allPlanes.filter(sup=> sup.nombre==a.selectCarrera)




	var arr =[]

	

	if(a.selectCarrera=="Any"){
		cursos.forEach(function (e) {

			if (
			((e.id ==a.selectId) || (a.selectId=="Any") )   &&    
			((e.nombre ==a.selectNombre) || (a.selectNombre=="Any"))    &&    
			((e.creditos ==a.selectCreditos) || (a.selectCreditos=="Any") )    &&    
			((e.tipologia ==a.selectTipologia) || (a.selectTipologia=="Any"))   &&
			((e.sede ==a.selectSede) || (a.selectSede=="Any"))   &&
			((e.nivelestudio ==a.selectNivelestudio) || (a.selectNivelestudio=="Any"))   &&
			((e.facultad ==a.selectFacultad) || (a.selectFacultad=="Any")) 
			
			) {
				arr.push(e);
			}
			
		});
	}
	else{
		const cursosByPlan  = useQuery(GET_COURSES_BY_PLAN, {
			variables:{ idPlan: caca[0].codigo},
		});
	
		//const result = cursosByPlan.data.cursosByPlan[0].id
		
	
		var cursosPorPlan = cursosByPlan.data?.cursosByPlan
		console.log(cursosByPlan.data?.cursosByPlan,"Putos")

		
		if(cursosPorPlan==undefined){
			return(
				<div>No Hay Coincidencias</div>
			)
		}

		cursosPorPlan.forEach(function (e) {

			if (
			((e.id ==a.selectId) || (a.selectId=="Any") )   &&    
			((e.nombre ==a.selectNombre) || (a.selectNombre=="Any"))    &&    
			((e.creditos ==a.selectCreditos) || (a.selectCreditos=="Any") )    &&    
			((e.tipologia ==a.selectTipologia) || (a.selectTipologia=="Any"))   &&
			((e.sede ==a.selectSede) || (a.selectSede=="Any"))   &&
			((e.nivelestudio ==a.selectNivelestudio) || (a.selectNivelestudio=="Any"))   &&
			((e.facultad ==a.selectFacultad) || (a.selectFacultad=="Any")) 
			
			) {
				arr.push(e);
			}
			
		});
	}

	


	return(
		<div>
			<table class="title3">
			<tr>

				<th class="title3">ID</th>

				<th class="title3">Nombre</th>

				<th class="title3">Creditos</th>

				<th class="title3">Tipologia</th>

				<th class="title3">Sede</th>

				<th class="title3">NivelEstudio</th>

				<th class="title3">Facultad</th>

			</tr>

			{arr.map(c=>  
			
			<tr key={c.id} >
				
				<Link to={"/groups"}
				onClick={(e) => {
					a.idGrupo=c.id
					
				}}>
				<th class="title3">{c.id}</th>
				</Link>
				<th class="title3">{c.nombre}</th>

				<th class="title3">{c.creditos}</th>

				<th class="title3">{c.tipologia}</th>

				<th class="title3">{c.sede}</th>

				<th class="title3">{c.nivelestudio}</th>

				<th class="title3">{c.facultad}</th>

			</tr>

			)}

			</table>
		</div>
	)
}