import React from 'react'

const Control = ({presupuesto}) => {
    /*contenedor-presupuesto contenedor sombra dos-columas */
  return (
    <div className='mt-10 flex justify-between items-center w-4/5 max-w-7xl m-auto shadow-black bg-orange-200 p-16 rounded-3xl flex-row text-3xl mb-8 text-center text-teal-800 font-bold gap-16 '>
    
        <div>
            <p>Grafica </p>
        </div>

        <div className='w-full'>
           
            <p>
                <span> Presupuesto:</span> ${presupuesto}
            </p>

            <p>
                <span> Disponible:</span> ${(0)}
            </p>
            
            <p>
                <span> Gastado:</span> ${(0)}
            </p>
        </div>
    </div>
    
  )
}

export default Control