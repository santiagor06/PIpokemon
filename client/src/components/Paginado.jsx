import React from "react";
import s from "./Paginado.module.css"

const Paginado=({pokemosPerPage,total,paginado})=>{
    const pages=[];
    for(let i=1;i<Math.ceil(total/pokemosPerPage);i++)
    {pages.push(i)}
    return(

        <div className={s.pagination}>
          <ul className={s.ul}>

          {pages&&pages.map((p)=>{
                return(
                <li className={s.li} key={p}>
                    <button className={s.button} key={p}  href={p} onClick={()=>{paginado(p)}}>{p}</button>
                </li>
                    
                    )

            })}
            

            </ul>  

        </div>
    )

};

export default Paginado