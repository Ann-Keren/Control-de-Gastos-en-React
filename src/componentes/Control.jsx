import React from 'react'

const Control = ({presupuesto}) => {
    /*contenedor-presupuesto contenedor sombra dos-columas */
  return (
    <div className='mt-10 flex justify-between items-center w-4/5 max-w-7xl m-auto shadow-black bg-orange-200 p-16 rounded-3xl flex-row text-3xl mb-8 text-center font-bold gap-16 '>
    
        <div>
            <p>Grafica </p>
        </div>

        <div className='w-full  text-center text-3xl font-semibold '>
           
            <p className='mb-8 p-1 font-light text-black'>
                <span className=' font-black mb-8 p-2 text-teal-800'> Presupuesto:</span> ${presupuesto}
            </p>

            <p className='mb-8 p-1 font-light text-black'>
                <span className=' font-black mb-8 p-2 text-teal-800'> Disponible:</span> ${(0)}
            </p>
            
            <p className='mb-8 p-1 font-light text-black'>
                <span className=' font-black mb-8 p-2 text-teal-800'> Gastado:</span> ${(0)}
            </p>
        </div>
    </div>
    
  )
}

export default Control