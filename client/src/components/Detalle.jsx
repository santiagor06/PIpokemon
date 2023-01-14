import React from "react";
import { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getDetail,clean } from "../redux/actions";
import Navbar from "./Navbar"
import s from "./Detalle.module.css"
import cargando from "../imagenes/Loading2.gif";



 const Detalle=(props)=>{

const id=props.match.params.id;
const dispatch=useDispatch();
let pokemon=useSelector((state)=>state.pokemon);

useEffect(()=>{
    dispatch(getDetail(id))
    return dispatch(clean())
},[dispatch,id])

return(
    
    <div className={s.main}>
        <Navbar/>
        {pokemon.length?
        <div className={s.cont}>
        <div className={s.head}>
        <h1 className={s.title}>{pokemon&&pokemon[0].name.charAt(0).toUpperCase()+pokemon[0].name.slice(1)}</h1>
      
        
        <div className={s.info}>
        <div className={s.stats}>
        <h2>Estadisticas:</h2>
        <p>Hp: {pokemon&&pokemon[0].hp}  </p>
        <p>Ataque: {pokemon&&pokemon[0].attack}  </p>
        <p>Defensa: {pokemon&&pokemon[0].hp}  </p>
        <p>Peso: {pokemon&&pokemon[0].weight} Kg  </p>
        <p>Altura: {pokemon&&pokemon[0].height} M  </p>
        </div>

        <div className={s.type}>
            <h2>Tipo:</h2>
        
            {pokemon&&pokemon[0].types.map((t)=>{
                return <p>- {t.name}</p>
            })}
        
        </div>
        </div>
        </div>
        <div >
        <img alt="img" className={s.poke} src={pokemon&&pokemon[0].image}  width="200px" height="250px"/>
       </div>

        </div>:<div className={s.main2}><img src={cargando} alt="cargando"/></div>}
    </div>
)
 }
export default Detalle;