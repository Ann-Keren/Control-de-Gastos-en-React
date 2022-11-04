import React from 'react'
import IconoAhorro from "../img/icono-ahorro.png"
import IconoComer from "../img/icon-comer.png"
import IconCasa from "../img/icon-home.png"
import IconoGastos from "../img/icon-gastos.png"
import IconOcio from "../img/icon-ocio.png"
import IconoSalud from "../img/icon-salud.png"
import IconSuscripcion from "../img/icon-suscripcion.png"

const diccionarioIconos ={
    ahorro: IconoAhorro,
    comida:IconoComer,
    casa: IconCasa,
    gastos: IconoGastos,
    ocio: IconOcio,
    salud: IconoSalud,
    suscripciones: IconSuscripcion
}

const formaFecha = fecha=>{
  const fechaNueva = new Date(fecha)
  const opciones = {
    year:'numeric',
    month:'long',
    day:'2-digit',
  }
  return fechaNueva.toLocaleDateString('es-ES',opciones)
}


const Gasto = ({gasto}) => {
  return (
    <div className='shadow-black bg-sky-400  p-16 rounded-3xl flex-row justify-between items-center gap-16 mb-8 mt-10 flex w-full max-w-7xl m-96 text-3xl  text-center font-bold  '>
        <div className='flex items-center gap-8'>
           <img 
              src={diccionarioIconos[gasto.categoria]}
              alt="Icono Gasto"
            />
           <div className='mb-4'>          
            <p className='text-2xl font-black uppercase text-gray-600 '>
              {gasto.categoria}
            </p>
            <p className='text-3xl font-bold text-gray-900'>
              {gasto.nombre}
            </p>
            <p className='text-3xl font-bold'> Agregado el: {''} <span className='font-normal'>{formaFecha(gasto.fecha)}</span></p>
           </div>
        </div>
          <p className='text-3xl font-black'>${gasto.cantidad} </p>
        </div>
  )
}


export default Gasto