import React from "react";
import s from "./Pokemon.module.css";

const Pokemon=({name,types,image})=>{
return(
    <div className={s.cardsContainer} >
        <div className={s.card}>
        <div className={s.cardInfo}>
        <h3>{name.charAt(0).toUpperCase()+name.slice(1)}</h3>
        <img src={image} className={s.pokemonImg} alt="img" />
        {types&&types.map((t)=>{
            return(<span href={t.name}>{t.name.charAt(0).toUpperCase()+t.name.slice(1)}</span>)
        })}
        </div>
        

        </div>

    </div>
)

}

export default Pokemon;