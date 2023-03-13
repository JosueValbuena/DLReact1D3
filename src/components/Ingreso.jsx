import React, { useState } from 'react'

const Ingreso = ({userDB, setUserDB}) => {

    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();

        const userObj = {
            id: Date.now().toString(36),
            nombre: nombre,
            correo: correo,
        }

        console.log(userObj)

        setUserDB([...userDB, userObj])

        console.log(userDB);

    }

    return (
        <div>
            <h2>Ingreso de Colaborador</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text"
                        value={nombre}
                        placeholder="Ingresa el Nombre"
                        onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="correo">Correo</label>
                    <input type="email"
                        value={correo}
                        placeholder="Ingresa el Correo"
                        onChange={(e) => setCorreo(e.target.value)} />
                </div>
                <button>Agregar</button>
            </form>
        </div>
    )
}

export default Ingreso