import { useState, useEffect } from "react"

import Header from "./componentes/header"
import Filtro from "./componentes/Filtro"
import ListaGastos from "./componentes/ListaGastos"
import VentanaEmergente from "./componentes/VentanaEmergente"

import IconoNuevoGasto from "./img/icon-NuevoGasto.svg"

function App() {

  //la condicion del localStorage es lo q es te adentro del arreglo se almacen si no este un arreglo vacio y lo convierte, recuerda el localStorage es string 
  const [gastos, setGastos] = useState(
    localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : [])

  const [presupuesto, setPresupuesto] = useState(
    JSON.parse(localStorage.getItem('presupuesto')) ?? 0
  )


  const [validPresupuesto, setValidPresupuesto] = useState(false)
  //aqui modal es una ventana que se va abrir al agregar un nuevo gasto se definio como ventana, se pone el valor useState como falso por que no se quiere que al princio se ejecute y lo llamamos con el setVentana y ahi se cambia el valor booleano con un click a la imagen y se abra la ventana
  const [ventana, setVentana] = useState(false)
  //se agrega otro hook para animar modal o la ventana 
  const [animarVentana, setAnimarVentana] = useState(false)
  //otro useState pero con un arreglo

  //se define un nuevo useState y este va iniciar como un objeto 
  const [gastoEditar, setGastoEditar] = useState({})

  //el useEffect va estar escuchando por los cambios que se dan al objeto de gastoEditar y el setGastoEditar

  const [filtro, setFiltro] = useState('')
  const [gastosFiltrados, setGastosFiltrados] = useState([])

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setVentana(true)
      setTimeout(() => {
        setAnimarVentana(true)
      }, 1000);
    }
  }, [gastoEditar])

  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto ?? 0)
  }, [presupuesto])

  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? [])
  }, [gastos])

  useEffect (() => {
    if(filtro){
      //filtrar gastos por categoria
      const gastosFiltrados = gastos.filter(gasto => gasto.categoria === filtro)
      setGastosFiltrados(gastosFiltrados)

    }

  }, [filtro])

  useEffect(() => {
    const presupuestoLS = JSON.parse(localStorage.getItem('presupuesto')) ?? 0

    if (presupuestoLS > 0) {
      setValidPresupuesto(true)
    }
  }, [])

  const admNuevoGasto = () => {
    setVentana(true)
    setGastoEditar({})

    // se pone el setTimeout pata cuado le demos al +nuevo gasto se haga una transicion y apararesca el formulario,  cuando el setventana cambia al true entoces se ejecuta setTimeout a los 3 segundos 
    setTimeout(() => {
      //console.log('animando modal...')
      setAnimarVentana(true)
    }, 1000);

  }

  //se genera el id unico
  const generarId = () => {
    const random = Math.random().toString(36)
    const fecha = Date.now().toString(36)
    return random + fecha
  }

  const guardarGasto = gasto => {
    if (gasto.id) {
      //actualizar
      const gastosAct = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState)
      setGastos(gastosAct)
      setGastoEditar({}) //sirve para limpiar el state por que una vez que poniamos editar el objeto se llena y no se vacia y al poner el objeto vacio una vez editado el gasto se pone en vacio y asi se evita algunos problemas

    } else {
      //nuevo gasto
      gasto.id = generarId()
      //console.log(gasto)
      gasto.fecha = Date.now()
      setGastos([...gastos, gasto])
    }
    setAnimarVentana(false)
    setTimeout(() => {
      setVentana(false)
    }, 1000)


  }
  const eliminarGasto = id => {
    const gastosAct = gastos.filter(gasto => gasto.id !== id)
    setGastos(gastosAct)
  }
  return (
    <div className={ventana ? 'overflow-hidden h-screen' : ''}>
      <Header
        gastos={gastos}
        setGastos={setGastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        validPresupuesto={validPresupuesto}
        setValidPresupuesto={setValidPresupuesto}
      />
      {/*es una validacion en donde si el presupuesto es true entonces la imagen aparecera en la siguiente formulario se utiliza doble && es mas corto y ya no es necesario una validacion
gastos es un arreglo que esta vacio lo poemos adentro del componente para extraerlo y lo pasemos al componente lista gastos */ }


      {validPresupuesto && (
        <>
          <main>
            <Filtro
              filtro={filtro}
              setFiltro={setFiltro}
            />
            <ListaGastos
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
              filtro ={filtro}
              gastosFiltrados={gastosFiltrados}
            />

          </main>
          <div className="right-20 bottom-20 fixed w-20 cursor-pointer">

            <img
              src={IconoNuevoGasto}
              alt="icono-NuevoGasto"
              onClick={admNuevoGasto}
            />
          </div>
        </>
      )}


      {/* se hace otra validacion con la ventana emergente*/ /*ponemos animarmodal para saber cuando cambio a true  */}
      {ventana && <VentanaEmergente
        setVentana={setVentana}
        animarVentana={animarVentana}
        setAnimarVentana={setAnimarVentana}
        guardarGasto={guardarGasto}
        gastoEditar={gastoEditar}
        setGastoEditar={setGastoEditar}
      />}


    </div>
  )
}

export default App
