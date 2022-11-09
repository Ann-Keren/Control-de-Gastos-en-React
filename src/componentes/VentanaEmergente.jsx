import CerrarBtn from '../img/icons-close.svg'
import { useState, useEffect } from 'react'
import Mensaje from './Mensaje'

const VentanaEmergente = ({ 
    setVentana, 
    animarVentana, 
    setAnimarVentana,
    guardarGasto,
    gastoEditar,
    setGastoEditar 
}) => {

const [mensaje, setMensaje] = useState('')
    const[nombre,setNombre]= useState('')
    const [cantidad,setCantidad]= useState('')
    const [categoria, setCategoria]= useState('')
    const [fecha, setFecha] = useState('')
    const [id, setId]= useState('')

    useEffect(() =>{
        if(Object.keys(gastoEditar).length >0 ){
            setNombre(gastoEditar.nombre)
            setCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria)
            setId(gastoEditar.id)
            setFecha(gastoEditar.fecha)
        }
    }, [])

    const ocultarVentana = () => {
        setAnimarVentana(false)
        setGastoEditar({})
        setTimeout(() => {
            setVentana(false)
        }, 1000)
    }

    const handleSubmit= e =>{
        e.preventDefault()

        if (nombre === '' || cantidad === '' || categoria ==='') {
            setMensaje('Todos los campos son obligatorios')

            setTimeout(()=>{
                setMensaje('')
            },2000)
            return
        }
        
        guardarGasto ({nombre,cantidad,categoria,id, fecha})
    }
    return (
        <div className=" absolute bg-gray-800 inset-0 ">
            <div className=" absolute right-12 top-12 w-12 h-12 ">
                <img src={CerrarBtn}
                    alt="Cerrar ventana"
                    onClick={ocultarVentana}
                />
            </div>
           

            <form 
            onSubmit={handleSubmit}
            className={' text-center block max-w-4xl  w-full m-0 px-40  transition-all opacity-0  ${animarVentana ? "relative opacity-100 " : opacity-0}'} >

                <legend className='text-4xl text-center block uppercase text-white mb-16 pb-4 border-y-2'>{gastoEditar.nombre ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>
                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

                <div className='grid mb-8 text-center'>
                    <label className='text-center text-2xl mb-4 text-white'
                        htmlFor="nombre"> Nombre Gasto</label>

                    <input className='rounded-2xl p-2 border-none flex-1 text-2xl text-center text-black'
                        id="nombre"
                        type="text"
                        placeholder="Añade el Nombre del Gasto"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                 
                </div>

                <div className='grid mb-8 text-center'>
                    <label className='text-center text-2xl mb-4 text-white' htmlFor="cantidad"> Cantidad</label>

                    <input className='rounded-2xl p-2 border-none flex-1 text-2xl text-center text-black'
                     id="cantidad"
                        type="number"
                        placeholder="Añade la Cantidad del gasto"
                        value={cantidad}
                        onChange={e => setCantidad(Number(e.target.value))}
                    />
                </div>

                <div className='grid mb-8 text-center'>
                    <label className='text-center text-2xl mb-4 text-white' htmlFor="categoria">Categoria</label>

                    <select className='flex-1 p-2 border-none rounded-2xl text-center text-black text-2xl' name="Categoria" id="categoria"
                    value={categoria}
                    onChange={e => setCategoria(e.target.value)}>

                        <option value="">---Selecione---</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>
                <input className="bg-rose-500 border-none p-3 text-center mt-2  text-white font-bold uppercase text-xl w-full transition-colors rounded-2xl" type="submit"
                    value={gastoEditar.nombre ? 'Guardar Cambios' : 'Añadir Gasto'} />
            </form>
        </div>
    )
}

export default VentanaEmergente