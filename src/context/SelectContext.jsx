import React, {useState,useEffect,useMemo,useContext} from "react";

const SelectContext = React.createContext();

export function SelectProvider(props){
    const [selectId,setselectId] = useState("Any");
    const [selectNombre,setselectNombre] = useState("Any");
    const [selectCreditos,setselectCreditos] = useState("Any");
    const [selectTipologia,setselectTipologia] = useState("Any");
    const [selectSede,setselectSede] = useState("Any");
    const [selectNivelestudio,setselectNivelestudio] = useState("Any");
    const [selectFacultad,setselectFacultad] = useState("Any");
    const [selectCarrera,setselectCarrera] = useState("Any");

    const handleSeselectId =({value})=>{
        console.log(value);
        setselectId(value)
    }
    const handleSelectNombre=({value})=>{
        console.log(value);
        setselectNombre(value)
    }
    const handleSelectCreditos =({value})=>{
        console.log(value);
        setselectCreditos(value)
    }
    const handleSelecTipologia =({value})=>{
        console.log(value);
        setselectTipologia(value)
    }
    const handleSelecSede =({value})=>{
        console.log(value);
        setselectSede(value)
    }
    const handleSelectNivelestudio =({value})=>{
        console.log(value);
        setselectNivelestudio(value)
    }
    const handleSelectFacultad =({value})=>{
        console.log(value);
        setselectFacultad(value)
    }
    const handleSelectCarrera =({value})=>{
        console.log(value);
        setselectFacultad(value)
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
            handleSelecTipologia,
            handleSelectCreditos,
            handleSelectNombre,
            handleSeselectId,
            handleSelecSede,
            handleSelectNivelestudio,
            handleSelectFacultad,
            handleSelectCarrera
        })
    },[selectId,selectNombre,selectCreditos,selectTipologia,selectSede,selectNivelestudio,selectFacultad,selectCarrera])

    return <SelectContext.Provider value={value} {...props}/>
}

export function useSelect(){
    const context = useContext(SelectContext);

    if (!context){
        throw new Error('select error')
    }
    return context; 

}