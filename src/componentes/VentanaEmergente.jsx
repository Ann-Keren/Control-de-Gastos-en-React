
import CerrarBtn from '../img/icons-close.svg'
import { useState } from 'react'
import Mensaje from './Mensaje'
//importar useState
const VentanaEmergente = ({ setVentana, animarVentana, setAnimarVentana,guardarGasto }) => {
//se declara el useState y co input vacio
const [mensaje, setMensaje] = useState('')
    const[nombre,setNombre]= useState('')
    const [cantidad,setCantidad]= useState('')
    const [categoria, setCategoria]= useState('')

    const ocultarVentana = () => {
        setAnimarVentana(false)
        setTimeout(() => {
            setVentana(false)
        }, 1000)
    }

    const handleSubmit= e =>{
        e.preventDefault()
// aqui la validacion para que todos los campos esten llenos de informacion y pueda añadir gasto

        if (nombre === '' || cantidad === '' || categoria ==='') {
            setMensaje('Todos los campos son obligatorios')

            setTimeout(()=>{
                setMensaje('')
            },2000)
            return
        }
        //este es un objeto
        guardarGasto ({nombre,cantidad,categoria})
    }
    return (
        <div className=" absolute bg-gray-800 inset-0 ">
            <div className=" absolute right-12 top-12 w-12 h-12 ">
                <img src={CerrarBtn}
                    alt="Cerrar ventana"
                    onClick={ocultarVentana}
                />
            </div>
            {/*al poner {''} se refiere que cambai a JS, se tenia en dinamico y lo cambia a js se pone una estatica y en forma condicional */
        /*este classname que tiene el form o esta haciendo la opacidad o el efecto */}

            <form 
            onSubmit={handleSubmit}
            className={'text-center block max-w-7xl w-11/12 m-0 px-40  transition-all opacity-0  ${animarVentana ? "relative opacity-100 " : opacity-0}'} >

                <legend className='text-6xl text-center block uppercase text-white mb-16 pb-4 border-y-2'>Nuevo Gasto</legend>
                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

                <div className='grid mb-8 text-center'>
                    <label className='text-center text-4xl mb-8 text-white'
                        htmlFor="nombre"> Nombre Gasto</label>

                    <input className='rounded-2xl p-4 border-none flex-1 text-3xl'
                        id="nombre"
                        type="text"
                        placeholder="añade el nombre del Gasto"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                    {/*en el input ponemos value para el usuario una ves que escriba se pueda visualizar en state */}
                </div>

                <div className='grid mb-8'>
                    <label className='text-center text-4xl mb-8 text-white' htmlFor="cantidad"> Cantidad</label>

                    <input className='rounded-2xl p-4 border-none flex-1 text-3xl'
                     id="cantidad"
                        type="number"
                        placeholder="añade la cantidad del gasto"
                        value={cantidad}
                        onChange={e => setCantidad(Number(e.target.value))}
                    />
                </div>

                <div className='grid mb-8'>
                    <label className='text-center text-4xl mb-8 text-white' htmlFor="categoria">Categoria</label>

                    <select className='flex-1 p-4 border-none rounded-2xl text-center text-black' name="Categoria" id="categoria"
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
                <input className="bg-rose-500 border-none p-4 text-center mt-2  text-white font-bold uppercase text-2xl w-full transition-colors rounded-2xl" type="submit"
                    value="Añadir Gasto" />
            </form>
        </div>
    )
}

export default VentanaEmergente