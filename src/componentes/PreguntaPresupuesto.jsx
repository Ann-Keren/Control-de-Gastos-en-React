import {useState} from "react"
//importamos el componentente de mensaje
import Mensaje from "./Mensaje"
const PreguntaPresupuesto= ({
    presupuesto, setPresupuesto, setValidPresupuesto})=>{
    //se crea la constante para mandar el mesaje del presupuesto si es correcto o no
    const [mensaje, setMensaje]= useState('')
    //admiistar presupuesto ->admPresupuesto
    const admPresupuesto = (e)=>{

        e.preventDefault();
        //se evalua si el presupuesto es menor a 0 o negativos 
        if(!presupuesto||presupuesto<0){
            setMensaje('no es un presupuesto valido')
        
            return
        }
        setMensaje('')
        //si es un presupuesto valido y pasemos la validacion le podemos poer true
        setValidPresupuesto(true)


    }
    return(
        <div className=" margin-top:-5rem display: flex  justify-content:space-between  align-items:center  width:90% max-width:80rem ">
            
           <form className="bg-pink-300 py-10 px-8 shadow-md  rounded-lg" 
           onSubmit={admPresupuesto}>

            <div className="display:grid margin-bottom:2rem">
                <label> Definir Presupuesto</label>
                <input className="font-size:2.8rem text-align:center"
                       type="number" 
                       placeholder="Añade tu Presupuesto"
                       value={presupuesto}
                       onChange={e=>setPresupuesto(Number(e.target.value))}
                />
            </div>
            <input className="bg-cyan-800 border:none padding:1rem text-align: center margin-top:2rem fot-weight:900 text-transform: uppercase font-size: 1.9rem width:100%"
            type="submit" value="Añadir" />

            
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

           </form>
        </div>
    )
}

export default PreguntaPresupuesto