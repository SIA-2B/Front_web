import React, { useState, useEffect } from "react";
import { useSelect } from "../context/SelectContext";
import { GET_COURSES_BY_PLAN } from "../features/courses/courses.querys";
import { useLazyQuery,useQuery } from "@apollo/client";

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
			<h2>Cursos</h2>
			{arr.map(c=>  

			<div key={c.id}>
				{c.id}
				{c.nombre}
				{c.creditos}
				{c.tipologia}
				{c.sede}
				{c.nivelestudio}
				{c.facultad}
			</div>
				
				
			)}
		</div>
	)
}