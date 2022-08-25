import React, {useState} from "react";
import Login from "./components/Login";
import User from "./components/User";


function App() {

  const [conectado,SetConectado] = useState(false);

  const acceder = (estado) => {
    SetConectado(estado);
  }

  
  return (
    conectado ? <User /> : <Login acceder={acceder} />
    
  );

}

export default App;
