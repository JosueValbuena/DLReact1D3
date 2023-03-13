import React from "react";
import TableRow from "./TableRow";

const UserList = ({userDB}) => {

    return (
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Correo</th>
                </tr>
            </thead>
            <TableRow userDB={userDB}/>
        </table>
    )
}

export default UserList;