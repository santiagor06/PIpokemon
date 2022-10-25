import React from "react";
import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemon } from "../redux/actions";
import s from "./Filtros.module.css"



const Filtros=({types,handleType,handleCreated,handleAlpha,handleAttack})=>{
const dispatch=useDispatch();
const[name,setName]=useState("");
useEffect(()=>{
    setName("");
        },[setName])

const handleChange=(e)=>{
    e.preventDefault();
    setName(e.target.value);
    }
const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(getPokemon(name))
}
    return(
        <div className={s.container}>
            <div>
            <label className={s.label} for="attack">Ataque: </label>
            <select name="attack" onChange={(e)=>{handleAttack(e)}}>
                <option value="" selected disabled hidden>Escoge</option>
                <option value="asc">Ascendente</option>
                <option value="des">Descendente</option>
            </select>
            </div>
        
           <div>
           <label className={s.label} for="alphabetic">Alfabetico: </label>
            <select name="alphabetic" onChange={(e)=>{handleAlpha(e)}}>
                <option value="" selected disabled hidden>Escoge</option>
                <option value="asc">Ascendente</option>
                <option value="des">Descendente</option>
            </select>
           </div>

          <div>
          <label className={s.label} for="createdBy">Creado por: </label>
            <select name="createdBy" onChange={(e)=>{handleCreated(e)}}>
            <option value="" selected disabled hidden>Escoge</option>
                <option value="Todos">Todos</option>
                <option value="API">API</option>
                <option value="Propios">Propios</option>
            </select>
          </div>
        <div>
        <label className={s.label} for="type">Tipo: </label>
            <select name="type" onChange={(e)=>{handleType(e)}}>
            <option value="Todos">Todos</option>
                {types&&types.map((t)=>{
                    return(<option value={t.name}>{t.name}</option>)
                })}
            </select>
        </div>
            

        <div>
        <input type="text" name="nombre" value={name} onChange={(e)=>{handleChange(e)}} placeholder="Nombre Pokemon" required></input>
          <button type="submit" onClick={(e)=>{handleSubmit(e)}}>Buscar</button>
        </div>

         
        
        </div>
    )
}
export default Filtros;