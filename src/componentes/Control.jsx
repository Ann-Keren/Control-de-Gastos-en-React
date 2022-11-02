import React from 'react'

const Control = ({presupuesto}) => {
  return (
    <div >Control
        <div>
            <p>Grafica </p>
        </div>

        <div>
            <p>
                <span> Presupuesto:</span> ${presupuesto}
            </p>
        </div>
    </div>
    
  )
}

export default Control