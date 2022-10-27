import React, {useState,useEffect,useMemo,useContext} from "react";
import { useQuery } from "@apollo/client";
import { GET_PLANES } from "../features/courses/courses.querys";
const SelectContext = React.createContext();

export function SelectProvider(props){
    const cur  = useQuery(GET_PLANES);
    const [selectId,setselectId] = useState("Any");
    const [selectNombre,setselectNombre] = useState("Any");
    const [selectCreditos,setselectCreditos] = useState("Any");
    const [selectTipologia,setselectTipologia] = useState("Any");
    const [selectSede,setselectSede] = useState("Any");
    const [selectNivelestudio,setselectNivelestudio] = useState("Any");
    const [selectFacultad,setselectFacultad] = useState("Any");
    const [selectCarrera,setselectCarrera] = useState("Any");

    const handleSeselectId =({value})=>{
        setselectId(value)
    }
    const handleSelectNombre=({value})=>{
        setselectNombre(value)
    }
    const handleSelectCreditos =({value})=>{
        setselectCreditos(value)
    }
    const handleSelecTipologia =({value})=>{
        setselectTipologia(value)
    }
    const handleSelecSede =({value})=>{
        setselectSede(value)
    }
    const handleSelectNivelestudio =({value})=>{
        setselectNivelestudio(value)
    }
    const handleSelectFacultad =({value})=>{
        setselectFacultad(value)
    }
    const handleSelectCarrera =({value})=>{
        setselectCarrera(value)
    }


    const value = useMemo(()=>{
        return({
            selectId,
            selectNombre,
            selectCreditos,
            selectTipologia,
            selectSede,
            selectNivelestudio,
            selectFacultad,
            selectCarrera,
            cur,
            handleSelecTipologia,
            handleSelectCreditos,
            handleSelectNombre,
            handleSeselectId,
            handleSelecSede,
            handleSelectNivelestudio,
            handleSelectFacultad,
            handleSelectCarrera,

        })
    },[selectId,selectNombre,selectCreditos,selectTipologia,selectSede,selectNivelestudio,selectFacultad,selectCarrera,cur])

    return <SelectContext.Provider value={value} {...props}/>
}

export function useSelect(){
    const context = useContext(SelectContext);

    if (!context){
        throw new Error('select error')
    }
    return context; 

}