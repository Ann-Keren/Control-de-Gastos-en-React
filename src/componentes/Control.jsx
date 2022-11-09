import {useState, useEffect } from 'react'
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import'react-circular-progressbar/dist/styles.css'


const Control = ({gastos,setGastos, presupuesto, setPresupuesto, setValidPresupuesto}) => {
    
    const [porcentaje, setPorcentaje] = useState(0)
    const [dispoible, setDisponible]= useState(0)
    const [gastado, setGastado]= useState(0)

    useEffect(()=>{
        const totalGastado= gastos.reduce((total,gasto) => gasto.cantidad + total,0)
        const totalDisponible =presupuesto - totalGastado

        //calculo del porcentaje gastado
        const nuevoPorcentaje= (((presupuesto - totalDisponible)/presupuesto)*100).toFixed(2)

        
        setDisponible(totalDisponible)
        setGastado(totalGastado)
        setTimeout(()=> {
            setPorcentaje(nuevoPorcentaje)
        },2000)
    },[gastos])

    const formaCantidad =(cantidad)=> {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

    const handleResetApp = () =>{
        const resultado = confirm('¿Deseas reiniciar presupuesto y gastos?')

        if(resultado){
            setGastos([])
            setPresupuesto(0)
            setValidPresupuesto(false)
        } 
    }
  return (
    <div className='mt-10 flex justify-between items-center w-4/5 max-w-7xl m-auto shadow-black bg-orange-200 p-16 rounded-3xl flex-row text-3xl mb-8 text-center font-bold gap-16 '>
    
        <div>
            <CircularProgressbar 
                styles={buildStyles({
                    pathColor:porcentaje > 100 ?'#DC2626': '#e3b8b2',
                    trailColor:'#fffbd4',
                    textColor: porcentaje > 100 ?'#DC2626' : '#a18093',
                    textSize:'9px'
                })}
                value={porcentaje}
                text={`${porcentaje} % Gastado`}
                
            />
        </div>

        <div className='w-full  text-center text-3xl font-semibold '>
           <button className='border-none bg-red-600 p-2 w-11/12 text-center text-white uppercase font-bold rounded-2xl transition-colors  '
                    type='button'
                    onClick={handleResetApp}>
            Resetear App
           </button>
            <p className='mb-8 p-1 font-light text-black my-6'>
                <span className=' font-black mb-8 p-4 text-slate-800'> Presupuesto:</span>{formaCantidad(presupuesto)} 
            </p>

            <p className={`${dispoible <0 ? 'text-red-800': 'b-8 p-1 font-light text-black'}`}>

                <span className={`${dispoible <0 ?'text-red-800' : ' font-black mb-8 p-2 text-teal-800'}`}> Disponible:</span> {formaCantidad(dispoible)}
            </p>
            
            <p className='mb-8 p-1 font-light text-black'>
                <span className=' font-black mb-8 p-2 text-teal-800'> Gastado:</span> {formaCantidad(gastado)}
            </p>
        </div>
    </div>
    
  )
}

export default Control