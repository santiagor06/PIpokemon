import React from "react";
import { Link } from "react-router-dom";
import s from "./Navbar.module.css";
import logo from "../imagenes/logo.png"
const Navbar=(props)=>{
    return(
        
          <div className={s.container}>
            <Link to='/home'> <img className={s.landing} src={logo} alt='Pokemon'/> </Link>     
              
            <Link to='/form' className={s.create}> Crea tu pokemon! </Link>
           </div>
            
    )
}
export default Navbar;