
import { useState } from "react"
import Mensaje from "./Mensaje"


const PreguntaPresupuesto = ({
    presupuesto, setPresupuesto, setValidPresupuesto }) => {
    
    const [mensaje, setMensaje] = useState('')
  
    const admPresupuesto = (e) => {
        e.preventDefault();
       
        if (!presupuesto || presupuesto < 0) {
            setMensaje('no es un presupuesto valido')
            return
        }
        setMensaje('')
        setValidPresupuesto(true)


    }
    return (
        <div className="mt-10 flex justify-between items-center w-3/5 max-w-6xl m-auto shadow-black shadow-lg bg-orange-200 p-16 rounded-3xl
        ">
            <form className="w-full m-0 p-26"
                onSubmit={admPresupuesto}>

                <div className="grid mb-8">
                    <label className="text-3xl mb-8 text-center text-teal-800 font-bold"> Definir Presupuesto</label>
                    <input className="text-black font-medium text-3xl text-center"
                        type="number"
                        placeholder="Añade tu Presupuesto"
                        value={presupuesto}
                        onChange={e => setPresupuesto(Number(e.target.value))}
                    />
                </div>
                <input className="bg-rose-400 border-none p-4 text-center mt-2  text-white font-bold uppercase text-2xl w-full transition-colors" type="submit" value="Añadir" />


                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

            </form>
        </div>
    )
}

export default PreguntaPresupuesto