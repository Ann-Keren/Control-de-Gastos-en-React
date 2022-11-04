import React from 'react'
import Gasto from './Gasto'
/* en el parametro de arrow function ponemos gastos para extraerlo o lo exportamos del arreglo que esta en la app y hacemos esta funcion o metodo ? si hay algo en gastos poner gastos como titulo : entonces si no hay nada poner no hay gastos aun
gastos.map el map se ejecuta una vez por cada elemento que hay*/
const ListaGastos = ({gastos}) => {
  return (
    <div className='mx-20 font-black text-slate-600 w-11/12 max-w-7xl '>
        
        <h2 >{gastos.length ? 'Gastos' : 'No hay gastos aun'}</h2>

        {gastos.map(gasto =>(
            <Gasto 
            key={gasto.id}
            gasto={gasto}
            />
        ))}
    </div>
  )
}

export default ListaGastos