import React from "react";

const TableRow = ({userDB}) => {
    return (
            <tr>
                <td>{userDB.nombre}</td>
                <td>{userDB.correo}</td>
            </tr>
    )
}

export default TableRow;