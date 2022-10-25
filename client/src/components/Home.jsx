import React from "react";
import s from "./Home.module.css"
import Filtros from "./Filtros";
import { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getPokemons,getTypes,filterType,filterCreated,orderAlpha, orderAttack } from "../redux/actions";
import { Link } from "react-router-dom";
import Pokemon from "./pokemon";
import Paginado from "./Paginado";
import Navbar from "./Navbar";
import cargando from "../imagenes/Loading2.gif";



const Home=(props)=>{
const dispatch=useDispatch();
const pokemons=useSelector(state=>state.pokemons);
const types=useSelector(state=>state.types);
useEffect(()=>{
    dispatch(getPokemons())
    dispatch(getTypes())
},[dispatch])
const [order,setOrder]=useState("")
const [currrentPage,setCurrentPage]=useState(1);
const [pokemonsPerPage,setPokemonsPerPage]=useState(12);
const lastIndex=currrentPage * pokemonsPerPage;
const firstIndex=lastIndex - pokemonsPerPage;
const currentPokemons=pokemons.slice(firstIndex,lastIndex);

const paginado=(num)=>{setCurrentPage(num)};
const handleType=(e)=>{dispatch(filterType(e.target.value))};
const handleCreated=(e)=>{dispatch(filterCreated(e.target.value))}
const handleAlpha=(e)=>{
    e.preventDefault();
    dispatch(orderAlpha(e.target.value))
    setCurrentPage(1);
    setOrder(`ordenado ${e.target.value}`)}
const handleAttack=(e)=>{
    e.preventDefault();
    dispatch(orderAttack(e.target.value))
    setCurrentPage(1);
    setOrder(`ordenado ${e.target.value}`)}


    return (
        <div className={s.main}>
        <Navbar/>
        <Filtros types={types} handleType={handleType} handleCreated={handleCreated} handleAlpha={handleAlpha} handleAttack={handleAttack}/>
        
            <div className={s.cards}>
        {currentPokemons?currentPokemons.map(p=>{
          return (
            <Link className={s.link} to={`/pokemon/${p.id}`}>
                <Pokemon  name={p.name} image={p.image} types={p.types} key={p.id}/>
            </Link>)
        }):<img src={cargando} alt="cargando"/>}
        </div>
        
       
        <Paginado pokemosPerPage={pokemonsPerPage} total={pokemons.length} paginado={paginado} />
        </div>
        
    )
}

export default Home;