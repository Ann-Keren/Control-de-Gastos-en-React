import { useState, useEffect } from 'react'

const Filtro = ({filtro, setFiltro}) => {


    return (
        <div className='shadow-lg bg-white p-16 rounded-3xl w-11/12 max-w-7xl m-auto flex items-center gap-8    '>
            <form >
                <div className='flex items-center gap-8 '>
                    <label className='text-5xl font-black fon text-gray-600'> Filtrar Gastos</label>
                    <select 
                        className='flex-1 p-4 border-none rounded-2xl text-center bg-red-200 text-3xl font-bold text-gray-600' 
                        value={filtro}
                        onChange={ e => setFiltro(e.target.value) }
                    >
                        <option value="">---Todas las Categorias---</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Filtro