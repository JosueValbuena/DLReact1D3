import React from "react";

const UserList = ({userDB}) => {

    return (
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Correo</th>
                </tr>
            </thead>
            <tbody>
                {userDB.map( user => <tr key={user.id}>
                    <td>{user.nombre}</td>
                    <td>{user.correo}</td>
                </tr>)}
            </tbody>
        </table>
    )
}

export default UserList;