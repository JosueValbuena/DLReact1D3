import React, { useState } from "react";
import { BaseColaboradores } from "./components/BaseColaboradores";
import BuscarColaborador from "./components/BuscarColaborador";
import InputUsers from "./components/InputUsers";
import UserList from "./components/UserList";

function App() {

  const [userDB, setUserDB] = useState(BaseColaboradores);

  return (
    <div className="App">
      <BuscarColaborador userDB={userDB} setUserDB={setUserDB}/>
      <hr></hr>
      <InputUsers userDB={userDB} setUserDB={setUserDB}/>
      <hr></hr>
      <UserList userDB={userDB}/>
    </div>
  );
}

export default App;
