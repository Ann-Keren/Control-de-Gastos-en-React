//import PreguntaPresupuesto from "./componentes/PreguntaPresupuesto"
//import Gastos from "./componentes/Gastos"
//import Formulario from "./componentes/formulario"
//import Error from "./componentes/error"
import Header from "./componentes/header"
import { useState } from "react"


function App(){
  
  const [presupuesto, setPresupuesto]= useState(0)
  const [validPresupuesto, setValidPresupuesto]= useState(false)
  
  return(
    <div>
      <Header
      presupuesto={presupuesto}
      setPresupuesto={setPresupuesto}
      validPresupuesto={validPresupuesto}
      setValidPresupuesto={setValidPresupuesto}
      />
      
     
     
      </div>
  )
}

export default App
