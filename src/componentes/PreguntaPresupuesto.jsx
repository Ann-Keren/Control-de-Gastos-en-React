
import { useState } from "react"
//importamos el componentente de mensaje
import Mensaje from "./Mensaje"
const PreguntaPresupuesto = ({
    presupuesto, setPresupuesto, setValidPresupuesto }) => {
    //se crea la constante para mandar el mesaje del presupuesto si es correcto o no y un string vacio en el useState
    const [mensaje, setMensaje] = useState('')
    //admiistar presupuesto ->admPresupuesto
    const admPresupuesto = (e) => {

        e.preventDefault();
        //se evalua si el presupuesto es menor a 0 o negativos 
        if (!presupuesto || presupuesto < 0) {
            setMensaje('no es un presupuesto valido')

            return
        }
        setMensaje('')
        //si es un presupuesto valido y pasemos la validacion le podemos poer true
        setValidPresupuesto(true)


    }
    return (
        <div className="mt-10 flex justify-between items-center w-4/5 max-w-7xl m-auto shadow-black bg-orange-200 p-16 rounded-3xl
        ">
            <form className="w-11/12 m-0 p-26"
                onSubmit={admPresupuesto}>

                <div className="grid mb-8">
                    <label className="text-3xl mb-8 text-center text-teal-800 font-bold"> Definir Presupuesto</label>
                    <input className="text-3xl text-center"
                        type="number"
                        placeholder="Añade tu Presupuesto"
                        value={presupuesto}
                        onChange={e => setPresupuesto(Number(e.target.value))}
                    />
                </div>
                <input className="bg-rose-300 border-none p-4 text-center mt-2  text-white font-bold uppercase text-2xl w-full transition-colors" type="submit" value="Añadir" />


                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

            </form>
        </div>
    )
}

export default PreguntaPresupuesto