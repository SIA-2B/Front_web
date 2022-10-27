import React, { createContext,useState,useContext, useEffect, Children } from "react";
import Select from 'react-select'
import { useSelect,SelectProvider } from "../context/SelectContext";
import { GET_GROUPS, GET_PLANES } from "../features/courses/courses.querys";
import "../styles/courses.css";
import { useLazyQuery,useQuery } from "@apollo/client";


export const Opciones = ({opc}) =>{

    

    const {handleSeselectId,handleSelectNombre,handleSelecTipologia,handleSelectCreditos,handleSelectSede,handleSelectNivelestudio,handleSelectFacultad,handleSelectCarrera,cur} = useSelect();
    

    

    let a=opc.map(sup => (sup.id))
    let b=opc.map(sup => (sup.nombre))
    let c=opc.map(sup => (sup.creditos))
    let d=opc.map(sup => (sup.tipologia))
    let e=opc.map(sup => (sup.sede))
    let f=opc.map(sup => (sup.nivelestudio))
    let g=opc.map(sup => (sup.facultad))
    let h=cur.data?.allPlanes.map(sup=>(sup.nombre))
    

    

    const dataA = new Set(a);
    const dataB = new Set(b);
    const dataC = new Set(c);
    const dataD = new Set(d);
    const dataE = new Set(e);
    const dataF = new Set(f);
    const dataG = new Set(g);
    const dataH = new Set(h);

    
    let resultA = [...dataA,"Any"].map(sup =>({label: sup,value: sup}));
    let resultB = [...dataB,"Any"].map(sup =>({label: sup,value: sup}));
    let resultC = [...dataC,"Any"].map(sup =>({label: sup,value: sup}));
    let resultD = [...dataD,"Any"].map(sup =>({label: sup,value: sup}));
    let resultE = [...dataE,"Any"].map(sup =>({label: sup,value: sup}));
    let resultF = [...dataF,"Any"].map(sup =>({label: sup,value: sup}));
    let resultG = [...dataG,"Any"].map(sup =>({label: sup,value: sup}));
    let resultH = [...dataH,"Any"].map(sup =>({label: sup,value: sup}));
    

    console.log(dataC)
    
    return(
 
        <div>
            
            <h5 className="title1">Codigo: </h5>
            
            <Select
                className="title2"
                defaultValue={resultA[resultA.length-1]}
                options = {resultA}
                onChange = {handleSeselectId}
            />
            <div></div>
            <h5 className="title1">Nombre:</h5>
            <Select 
                className="title2"
                defaultValue={resultB[resultB.length-1]}
                options = {resultB}
                onChange = {handleSelectNombre}
            />
            <div></div>
            <h5 className="title1" >Creditos:</h5>
            <Select
                className="title2"
                defaultValue={resultC[resultC.length-1]}
                options = {resultC}
                onChange = {handleSelectCreditos}
            />
            <div></div>
            <h5 className="title1">Facultad:</h5>
            <Select
                className="title2"
                defaultValue={resultD[resultD.length-1]}
                options = {resultD}
                onChange = {handleSelecTipologia}
            />
            <div></div>
            <h5 className="title1">Sede:</h5>
            <Select
                className="title2"
                defaultValue={resultE[resultE.length-1]}
                options = {resultE}
                onChange = {handleSelectSede}
            />
            <div></div>
            <h5 className="title1">NivelEstudio:</h5>
            <Select
                className="title2"
                defaultValue={resultF[resultF.length-1]}
                options = {resultF}
                onChange = {handleSelectNivelestudio}
            />
            <div></div>
            <h5 className="title1">Facultad:</h5>
            <Select
                className="title2"
                defaultValue={resultG[resultG.length-1]}
                options = {resultG}
                onChange = {handleSelectFacultad}
            />
            <div></div>
            <h5 className="title1">Carrera:</h5>
            <Select
                className="title2"
                defaultValue={resultH[resultH.length-1]}
                options = {resultH}
                onChange = {handleSelectCarrera}
            />
   
            

            
        </div>
    )
}