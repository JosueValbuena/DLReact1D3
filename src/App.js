import React, { useState } from "react";
import { BaseColaboradores } from "./components/BaseColaboradores";
import Ingreso from "./components/Ingreso";
import Tabla from "./components/Tabla";


function App() {

  const [userDB, setUserDB] = useState(BaseColaboradores);

  return (
    <div className="App">
      <Ingreso userDB={userDB} setUserDB={setUserDB}/>
      <Tabla userDB={userDB}/>
    </div>
  );
}

export default App;
