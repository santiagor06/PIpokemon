import React from "react";
import { useState,useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";

import { getTypes,postPokemon } from "../redux/actions";
import Navbar from "./Navbar";
import s from "./Form.module.css"
import entrenador from "../imagenes/entrenador.png"



const Form=(props)=>{
    
    const [errors,setErrors]=useState({});
    const[input,setInput]=useState({name:"",
                                    hp:"",
                                    attack:"",
                                    defense:"",
                                    velocity:""
                                    ,height:""
                                    ,weight:""
                                    ,type:[],
                                    image:""})

    const validate=(input)=>{
        const ExpRegSoloLetras="^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$";
        
        let errors={};
        if(!input.hp || !input.attack || !input.defense || !input.velocity || !input.height || !input.weight)errors.stats="Faltan campos por llenar"
        if(!input.name)errors.name="Ingrese un nombre"
        else if(!input.name.match(ExpRegSoloLetras))errors.name="Solo se admiten letras"
        if(!input.type.length)errors.type="Seleccione un tipo"
        
        return errors;
    }   

    const handleChange=(e)=>{
        e.preventDefault();
        setInput({...input,[e.target.name]:e.target.value})
        setErrors(validate({...input,[e.target.name]:e.target.value}))
        
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
       if (!errors.type && !errors.name && !errors.stats && input.name)
       {dispatch(postPokemon(input));
        alert("Personaje Creado");
        setInput({name:"",
        hp:"",
        attack:"",
        defense:"",
        velocity:""
        ,height:""
        ,weight:""
        ,type:[],
        image:""});
        }
        else{alert("Falta campos")}
        

    }
    
    const handleChangeSelect=(e)=>{
        setInput({...input,type:[...input.type,{name:e.target.value}]})
        setErrors(validate({...input,[e.target.name]:e.target.value}))
    }
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getTypes())
    },[dispatch])
    const types=useSelector(state=>state.types);
    
    return(
        <div className={s.main}>
            <Navbar/>
            <div className={s.all}>
            <div className={s.form}>
            <h1>CREA TU POKEMON!!!</h1>
            
            <form onSubmit={(e)=>{handleSubmit(e)}}>
            <div className={s.inp}>
                <label for="name">Nombre: </label>
                <input className={s.bor} onChange={(e)=>{handleChange(e)}} placeholder="Ingrese un nombre" type="text" name="name"></input>
                {errors.name&&(<p className={s.error}>{errors.name}</p>)}
            </div>
            <div className={s.stats}>
                <div className={s.uni}>
                <label for="hp">Hp: </label>
                <input className={s.bor} onChange={(e)=>{handleChange(e)}} type="number" id="hp" placeholder="1-1000" name="hp" min="1" max="1000"></input>
                </div>
                <div className={s.uni}>
                <label for="attack">Att: </label>
                <input className={s.bor} onChange={(e)=>{handleChange(e)}} type="number" placeholder="1-1000" id="attack" name="attack" min="1" max="1000"></input>
                </div>
                <div className={s.uni}>
                <label for="defense">Def: </label>
                <input className={s.bor} onChange={(e)=>{handleChange(e)}} type="number" placeholder="1-1000" id="defense" name="defense" min="1" max="1000"></input>
                </div>
                <div className={s.uni}>
                <label for="velocity">Vel: </label>
                <input className={s.bor} onChange={(e)=>{handleChange(e)}} type="number" placeholder="1-1000" id="velocity" name="velocity" min="1" max="1000"></input>
                </div>
                </div>
                <div className={s.inp}>
                <label for="height">Altura: </label>
                <input className={s.bor} onChange={(e)=>{handleChange(e)}} type="number" placeholder="Metros" id="height" name="height" min="1" ></input>
                </div>
                <div className={s.inp}>
                <label for="weight">Peso: </label>
                <input className={s.bor} onChange={(e)=>{handleChange(e)}} placeholder="kilos" type="number" id="weight" name="weight" min="1" ></input>
                </div>
                
                
                <div className={s.inp}>
                <label for="image">Imagen: </label>
                <input className={s.bor} onChange={(e)=>{handleChange(e)}} type="text" name="image" placeholder="Ingrese un URL"></input> 
                {errors.image&&(<p className={s.error}>{errors.image}</p>)}
                </div>
                <div className={s.inp}>
                <label for="type">Tipo: </label>
                <select className={s.bor} onChange={(e)=>{handleChangeSelect(e)}} name="type" id="type" >
                {types&&types.map((t)=>{
                    return(<option value={t.name}>{t.name}</option>)
                })}
                </select>
                {errors.type&&(<p className={s.error}>{errors.type}</p>)}
                <ol >
                    {input.type.map(t=>{
                        return(<li key={t.name}>{t.name}</li>)
                    })}
                </ol>
             </div>
             
            <input type="submit" className={s.button}  value="Crear"/>
            {errors.stats&&(<p className={s.error}>{errors.stats}</p>)}
         
            </form>
            </div>  
            <div className={s.entre}><img className={s.entre} src={entrenador} alt="icon"/></div>
            </div>                  
        </div>
    )
}

export default Form;