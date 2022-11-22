import React, {useState,useEffect,useMemo,useContext} from "react";
import { useQuery } from "@apollo/client";
import { GET_PLANES } from "../features/courses/courses.querys";
const SelectContext = React.createContext();

export function SelectProvider(props){
    const cur  = useQuery(GET_PLANES);
    const [idGrupo,setIdGrupo] =useState("0005")
    const [redi, setRedi]= useState(false);
    const [selectId,setselectId] = useState("Any");
    const [selectNombre,setselectNombre] = useState("Any");
    const [selectCreditos,setselectCreditos] = useState("Any");
    const [selectTipologia,setselectTipologia] = useState("Any");
    const [selectSede,setselectSede] = useState("Any");
    const [selectNivelestudio,setselectNivelestudio] = useState("Any");
    const [selectFacultad,setselectFacultad] = useState("Any");
    const [selectCarrera,setselectCarrera] = useState("Any");

    const cRedi =({value})=>{
        setRedi(value)
    }
    const cidGrupo=({value})=>{
        setIdGrupo(value)
    }

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
            redi,
            idGrupo,
            cRedi,
            cidGrupo,
            handleSelecTipologia,
            handleSelectCreditos,
            handleSelectNombre,
            handleSeselectId,
            handleSelecSede,
            handleSelectNivelestudio,
            handleSelectFacultad,
            handleSelectCarrera,

        })
    },[ redi,idGrupo,selectId,selectNombre,selectCreditos,selectTipologia,selectSede,selectNivelestudio,selectFacultad,selectCarrera,cur])

    return <SelectContext.Provider value={value} {...props}/>
}

export function useSelect(){
    const context = useContext(SelectContext);

    if (!context){
        throw new Error('select error')
    }
    return context; 

}