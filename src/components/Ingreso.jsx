import React, { useState } from 'react'
import Error from './Error';

const Ingreso = ({userDB, setUserDB}) => {

    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [error, setError] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault();

        const userObj = {
            id: Date.now().toString(36),
            nombre: nombre,
            correo: correo,
        }

        setUserDB([...userDB, userObj])

        if([nombre, correo].includes("")){
            setError(true)
            return
        } setError(false);
    }

    return (
        <div>
            <h2>Ingreso de Colaborador</h2>
            <form onSubmit={handleSubmit}>
                {error ? <Error/> : ""}
                <div>
                    <label htmlFor="nombre" className='form-label'>Nombre</label>
                    <input type="text"
                        value={nombre}
                        placeholder="Ingresa el Nombre"
                        onChange={(e) => setNombre(e.target.value)} 
                        className="form-control"/>
                </div>
                <div>
                    <label htmlFor="correo" className='form-label'>Correo</label>
                    <input type="email"
                        value={correo}
                        placeholder="Ingresa el Correo"
                        onChange={(e) => setCorreo(e.target.value)} 
                        className="form-control"/>
                </div>
                <div className='d-flex justify-content-center'>
                <button className='btn btn-primary my-2'>Agregar</button>
                </div>
            </form>
        </div>
    )
}

export default Ingreso