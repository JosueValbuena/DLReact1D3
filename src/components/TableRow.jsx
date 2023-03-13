import React from "react";

const TableRow = ({userDB}) => {
    return(
        <tbody>
            {userDB.map( userDB => <tr key={userDB.id}>
                <td>{userDB.nombre}</td>
                <td>{userDB.correo}</td>
            </tr>)}
        </tbody>
    )
}

export default TableRow;