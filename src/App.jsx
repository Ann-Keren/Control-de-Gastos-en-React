import { useState, useEffect } from "react"

import Header from "./componentes/header"
import Filtro from "./componentes/Filtro"
import ListaGastos from "./componentes/ListaGastos"
import VentanaEmergente from "./componentes/VentanaEmergente"

import IconoNuevoGasto from "./img/icon-NuevoGasto.svg"

function App() {

  const [gastos, setGastos] = useState(
    localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : [])

  const [presupuesto, setPresupuesto] = useState(
    JSON.parse(localStorage.getItem('presupuesto')) ?? 0
  )


  const [validPresupuesto, setValidPresupuesto] = useState(false)

  const [ventana, setVentana] = useState(false)

  const [animarVentana, setAnimarVentana] = useState(false)

  const [gastoEditar, setGastoEditar] = useState({})

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

  useEffect(() => {
    if (filtro) {
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
    setTimeout(() => {
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
      setGastoEditar({})

    } else {
      gasto.id = generarId()
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
              filtro={filtro}
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
