import React, { createContext,useState,useContext, useEffect, Children } from "react";
import Select from 'react-select'
import { useSelect,SelectProvider } from "../context/SelectContext";



export const Opciones = ({opc}) =>{

    const {handleSeselectId,handleSelectNombre,handleSelecTipologia,handleSelectCreditos,handleSelectSede,handleSelectNivelestudio,handleSelectFacultad} = useSelect();
    
    let a=opc.map(sup => (sup.id))
    let b=opc.map(sup => (sup.nombre))
    let c=opc.map(sup => (sup.creditos))
    let d=opc.map(sup => (sup.tipologia))
    let e=opc.map(sup => (sup.sede))
    let f=opc.map(sup => (sup.nivelestudio))
    let g=opc.map(sup => (sup.facultad))

    const dataA = new Set(a);
    const dataB = new Set(b);
    const dataC = new Set(c);
    const dataD = new Set(d);
    const dataE = new Set(e);
    const dataF = new Set(f);
    const dataG = new Set(g);

    
    let resultA = [...dataA,"Any"].map(sup =>({label: sup,value: sup}));
    let resultB = [...dataB,"Any"].map(sup =>({label: sup,value: sup}));
    let resultC = [...dataC,"Any"].map(sup =>({label: sup,value: sup}));
    let resultD = [...dataD,"Any"].map(sup =>({label: sup,value: sup}));
    let resultE = [...dataE,"Any"].map(sup =>({label: sup,value: sup}));
    let resultF = [...dataF,"Any"].map(sup =>({label: sup,value: sup}));
    let resultG = [...dataG,"Any"].map(sup =>({label: sup,value: sup}));
    

    console.log(dataC)
    
    return(
        <div>
            <h5>Codigo</h5>
            <Select 
                
                defaultValue={resultA[resultA.length-1]}
                options = {resultA}
                onChange = {handleSeselectId}
            />
            <h5>Nombre</h5>
            <Select
                
                defaultValue={resultB[resultB.length-1]}
                options = {resultB}
                onChange = {handleSelectNombre}
            />
            <h5>Creditos</h5>
            <Select
                
                defaultValue={resultC[resultC.length-1]}
                options = {resultC}
                onChange = {handleSelectCreditos}
            />
            <h5>Facultad</h5>
            <Select
                
                defaultValue={resultD[resultD.length-1]}
                options = {resultD}
                onChange = {handleSelecTipologia}
            />
            <h5>Sede</h5>
            <Select
                
                defaultValue={resultE[resultE.length-1]}
                options = {resultE}
                onChange = {handleSelectSede}
            />
            <h5>NivelEstudio</h5>
            <Select
                
                defaultValue={resultF[resultF.length-1]}
                options = {resultF}
                onChange = {handleSelectNivelestudio}
            />
            <h5>Facultad</h5>
            <Select
                
                defaultValue={resultG[resultG.length-1]}
                options = {resultG}
                onChange = {handleSelectFacultad}
            />
   
            

            
        </div>
    )
}