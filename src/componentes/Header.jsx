import React from "react";
import PreguntaPresupuesto from "./PreguntaPresupuesto";
import Control from "./Control";

//function Header(){

//estos son props
    const Header=({
        gastos, 
        setGastos,
        presupuesto, 
        setPresupuesto, 
        validPresupuesto, 
        setValidPresupuesto
    }) =>{

        return(
    <header>
        <h1> Planificador de Gastos</h1>

        { validPresupuesto ? (
            <Control
            gastos ={gastos}
            setGastos={setGastos}
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            setValidPresupuesto={setValidPresupuesto}
            />
        ) : (
        <PreguntaPresupuesto 
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        setValidPresupuesto={setValidPresupuesto}
        />
      )}
    </header>
)
}
export default Header
