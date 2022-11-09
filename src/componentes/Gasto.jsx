import React from 'react'
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from 'react-swipeable-list'
import "react-swipeable-list/dist/styles.css"

import IconoAhorro from "../img/icono-ahorro.png"
import IconoComer from "../img/icon-comer.png"
import IconCasa from "../img/icon-home.png"
import IconoGastos from "../img/icon-gastos.png"
import IconOcio from "../img/icon-ocio.png"
import IconoSalud from "../img/icon-salud.png"
import IconSuscripcion from "../img/icon-suscripcion.png"

const diccionarioIconos = {
  ahorro: IconoAhorro,
  comida: IconoComer,
  casa: IconCasa,
  gastos: IconoGastos,
  ocio: IconOcio,
  salud: IconoSalud,
  suscripciones: IconSuscripcion
}

const formaFecha = fecha => {
  const fechaNueva = new Date(fecha)
  const opciones = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  }
  return fechaNueva.toLocaleDateString('es-ES', opciones)
}


const Gasto = ({ gasto, setGastoEditar, eliminarGasto }) => {
  const { categoria, nombre, cantidad, id, fecha } = gasto;

  const leadingActions = () => (
    <LeadingActions >
      <SwipeAction className="rounded-3xl w-full flex justify-center items-center text-3xl text-right bg-blue-600 text-white my-8" onClick={() => setGastoEditar(gasto)}>
        Editar
      </SwipeAction>
    </LeadingActions>
  )
  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction className="rounded-3xl w-full flex justify-center items-center text-3xl text-right bg-red-600 text-white my-8" onClick={() => eliminarGasto(id)}
      destructive={true}
      >
         Eliminar
      </SwipeAction>
    </TrailingActions>
  )

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >

        <div className='shadow-lg p-12 rounded-3xl w-full  m-auto flex items-center gap-24 shadow-black bg-blue-400 justify-center mb-8 mt-8 text-3xl  text-center        
        '>
          <div className='flex items-center gap-8'>
            <img
              src={diccionarioIconos[categoria]}
              alt="Icono Gasto"
            />
            <div className='mb-8 '>
              <p className='text-2xl font-black uppercase text-gray-700 items-center flex justify-center '>
                {categoria}
              </p>
              <p className='p-4 text-3xl font-bold text-gray-900'>
                {nombre}
              </p>
              <p className='text-3xl font-bold items-center text-gray-700 p-4'> Agregado el: {''} <span className='font-normal'>{formaFecha(fecha)}</span></p>
            </div>
          </div>
          <p className='text-3xl font-black'>${cantidad} </p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  )
}


export default Gasto