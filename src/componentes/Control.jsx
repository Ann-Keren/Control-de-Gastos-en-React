import {useState, useEffect } from 'react'


const Control = ({gastos, presupuesto}) => {
    
    const [dispoible, setDisponible]= useState(0)
    const [gastado, setGastado]= useState(0)

    useEffect(()=>{
        const totalGastado= gastos.reduce((total,gasto) => gasto.cantidad + total,0)
        const totalDisponible =presupuesto - totalGastado

        setDisponible(totalDisponible)

        setGastado(totalGastado)
    },[gastos])

    const formaCantidad =(cantidad)=> {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

  return (
    <div className='mt-10 flex justify-between items-center w-4/5 max-w-7xl m-auto shadow-black bg-orange-200 p-16 rounded-3xl flex-row text-3xl mb-8 text-center font-bold gap-16 '>
    
        <div>
            <p>Grafica </p>
        </div>

        <div className='w-full  text-center text-3xl font-semibold '>
           
            <p className='mb-8 p-1 font-light text-black'>
                <span className=' font-black mb-8 p-2 text-teal-800'> Presupuesto:</span>{formaCantidad(presupuesto)} 
            </p>

            <p className='mb-8 p-1 font-light text-black'>
                <span className=' font-black mb-8 p-2 text-teal-800'> Disponible:</span> {formaCantidad(dispoible)}
            </p>
            
            <p className='mb-8 p-1 font-light text-black'>
                <span className=' font-black mb-8 p-2 text-teal-800'> Gastado:</span> {formaCantidad(gastado)}
            </p>
        </div>
    </div>
    
  )
}

export default Control