import React, { useState } from 'react'
import TableRow from './TableRow';

const Tabla = ({ userDB, setUserDB }) => {

    const [filtrar, setFiltrar] = useState("");
    console.log(filtrar);
    return (
        <div>
            <div>
                <h2>Buscar Colaborador</h2>
                <input type="text"
                    value={filtrar}
                    placeholder="filtrar..."
                    onChange={(e) => setFiltrar(e.target.value)} />
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Correo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userDB.filter((user) => {
                            return filtrar.toLowerCase() === "" ? user : user.nombre.toLowerCase().includes(filtrar)
                        }).map(user => <TableRow userDB={user} key={user.id} />)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Tabla;
