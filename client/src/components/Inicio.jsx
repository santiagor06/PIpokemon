import React from "react";
import { Link } from "react-router-dom";
import s from "./Inicio.module.css"
import fondo from "../imagenes/pngwing.com.png"
 

const Inicio=(props)=>{
    return(<div className={s.general}>
       
        <div className={s.landingMain}>
            <div className={s.landingLeft}>
                
                <h1 className={s.landingTitle}>Bienvenido a PokeAPP!</h1>
                
                <Link to='/home'>
                    <button className={s.button}><div className={s.landingBtn}>Empecemos</div></button>
                </Link>
            </div>
            <div className={s.landingRight}>
                <img className={s.img} src={fondo} alt="charizard"/>
            </div>
        </div>
    </div>
       
    )
}

export default Inicio;