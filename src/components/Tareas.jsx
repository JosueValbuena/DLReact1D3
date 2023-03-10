import React, { useState } from "react";
import {TareasIniciales} from "./TareasIniciales";

const Tareas = () => {

    const [nombreTarea, setNombreTarea] = useState ("");
    const [listaTareas, setListaTareas] = useState (TareasIniciales); 

    const enviarFormulario = (e) =>{
        e.preventDefault();
        setListaTareas([...listaTareas, {nombre: nombreTarea, completada: false}]);
        console.log(listaTareas);
        setNombreTarea("");
    }

    const capturarInput = (e) =>{
        setNombreTarea(e.target.value);
    }

    return (
        <div>
            <form action="" onSubmit={enviarFormulario}>
                <label htmlFor="ingresar"></label>
                <input type="text" id="ingresar" onChange={capturarInput}/>
                <button type="submit">Enviar</button>
            </form>

            <ul>
                {listaTareas.map(tarea => 
                <li key={tarea.nombre} 
                onClick={()=>console.log(tarea)} 
                style={tarea.completada === true ? {textDecoration:"line-through"}:{}}>
                {tarea.nombre}<button>Completar</button>
                </li>)}
            </ul>
        </div>
    )
}

export default Tareas;