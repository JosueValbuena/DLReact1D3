import React, { useState } from "react";

const Tareas = () => {

    const [nombreTarea, setNombreTarea] = useState ("");
    const [listaTareas, setListaTareas] = useState (["Tarea1", "Tarea2", "Tarea3"]); 

    // const listaTareas = ["Tarea1", "Tarea2", "Tarea3"];

    const enviarFormulario = (e) =>{
        e.preventDefault();
        setListaTareas([...listaTareas, nombreTarea]);
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
                {listaTareas.map(tarea => <li key={tarea}>{tarea}</li>)}
            </ul>
        </div>
    )
}

export default Tareas;