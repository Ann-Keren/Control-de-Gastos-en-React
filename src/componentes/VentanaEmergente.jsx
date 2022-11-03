import CerrarBtn from '../img/icon-close.svg'

const VentanaEmergente = ({setVentana, animarVentana, setAnimarVentana}) => {
    const ocultarVentana =()=>{
        
        setAnimarVentana(false)

        setTimeout(()=>{
            setVentana(false)
        },1000)
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

        <form className={'max-w-7xl w-2/6 transition-all opacity-0  ${animarVentana ? "relative opacity-100 " : opacity-0}' } >
            <legend className='text-6xl text-center block uppercase text-white mb-16 pb-4 border-y-2'>Nuevo Gasto</legend>

            <div className='campo'>
            <label htmlFor="nombre"> Nombre Gasto</label>
            <input id="nombre"
                    type="number"
                    placeholder="añade la cantidad del gasto" 
                    />
            </div>
            <div className='campo'>
                <label htmlFor="categoria">Categoria</label>
                <select name="Categoria" id="categoria">
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
            <input type="submit"
                    value="Añadir Gasto" />
        </form>
    </div>
  )
}

export default VentanaEmergente