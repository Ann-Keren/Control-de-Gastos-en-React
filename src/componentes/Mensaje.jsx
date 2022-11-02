import React from 'react'

//aqui se hace que al mandar mensaje de error que el presupuesto no esta correcto o que si cumpla la condicion que sea correcto el presupuesto tampien made mensaje con el tipo que cambie el tipo de correcto o no 
//el children pasa todo el mensaje 
const Mensaje = ({children,tipo}) => {
  return (
    <div className={' ${tipo}'}>{children}</div>
  )
}

export default Mensaje