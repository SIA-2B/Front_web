import React, { useState, useEffect } from "react";
import { useSelect } from "../context/SelectContext";

export const CoursesA=({cursos}) =>{
	if (cursos==null) return null

	const a = useSelect();

	var arr =[]

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


	console.log("HOLAAAA",arr);
	

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