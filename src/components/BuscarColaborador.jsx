import React, { useState } from "react";

const BuscarColaborador = ({ userDB, setUserDB }) => {

    const [buscar, setBuscar] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()

    let result = [];
    if(!buscar) {
        result = userDB;
    } else {
        result = userDB.filter(
            (user) => 
            user.nombre.includes(buscar) || 
            user.email.includes(buscar)
        );
    }
    console.log(result)
}

    return (
        <div>
            <h2>Busqueda de Colaborador</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Busqueda.." value={buscar} onChange={e=>setBuscar(e.target.value)} />
            </form>
        </div>
    )
}

export default BuscarColaborador;