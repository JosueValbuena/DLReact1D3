import React, { useState } from "react";

const InputUser = ({userDB, setUserDB}) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false)
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if([name, email].includes("")){
            setError(true);
        }else{
            setError(false);
        }

        const datosObj = {
            id: Date.now().toString(36),
            nombre: name,
            correo: email,
        }

        setUserDB([...userDB ,datosObj]);
    }

    return (
        <div>
            <h2>Ingresa datos del colaborador</h2>

            <form onSubmit={handleSubmit}>
                {error ? <p>Debes llenar todos los campos</p> : null}
                <div>
                    <label htmlFor="name">Nombre del Colaborador</label>
                    <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">Email del Colaborador</label>
                    <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <button>Agregar Colaborador</button>
            </form>
        </div>
    )
}

export default InputUser;