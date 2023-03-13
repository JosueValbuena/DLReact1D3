import React, { useState } from "react";
import TableRow from "./TableRow";

const BuscarColaborador = ({ userDB, setUserDB }) => {

    const [buscar, setBuscar] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()

    let userDBF = userDB.filter(
        user => user.nombre === buscar || user.correo === buscar
    )
    
    if(!buscar){
        userDBF = userDB;
        return
    }
    userDBF.map( ele => <TableRow userDB={ele}/>)
    console.log(userDBF);
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