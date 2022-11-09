import { useState, useEffect } from 'react'

const Filtro = ({filtro, setFiltro}) => {


    return (
        <div className='shadow-lg shadow-black bg-orange-200 p-8 rounded-3xl w-full max-w-6xl m-auto flex items-center gap-8    '>
            <form >
                <div className='w-full flex items-center  gap-8 '>
                    <label className='text-3xl font-black fon text-gray-600 text-center mx-20'> Filtrar Gastos</label>
                    <select 
                        className='flex mx-24 p-4 border-none rounded-2xl text-center bg-teal-100 text-2xl   font-bold text-gray-700' 

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